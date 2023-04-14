import { BaseSiteCdkDistributionProps, BaseSiteDomainProps } from './utils/BaseSite';
import { isCDKConstruct } from './utils/Construct';
import { RemovalPolicy } from 'aws-cdk-lib';
import { DnsValidatedCertificate, ICertificate } from 'aws-cdk-lib/aws-certificatemanager';
import { Distribution, ViewerProtocolPolicy } from 'aws-cdk-lib/aws-cloudfront';
import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins';
import {
  AaaaRecord,
  ARecord,
  HostedZone,
  IHostedZone,
  RecordTarget,
} from 'aws-cdk-lib/aws-route53';
import { HttpsRedirect } from 'aws-cdk-lib/aws-route53-patterns';
import { CloudFrontTarget } from 'aws-cdk-lib/aws-route53-targets';
import { Bucket, BucketProps, HttpMethods } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

///
/// With scaffolding help from https://github.com/serverless-stack/serverless-stack/blob/master/packages/resources/src/NextjsSite.ts
///

export interface ExposedAssetBucketProps {
  s3Bucket?: BucketProps;
  cfDistribution?: BaseSiteCdkDistributionProps;
  customDomain?: string | BaseSiteDomainProps;
}

export class ExposedAssetBucket extends Construct {
  public readonly props: ExposedAssetBucketProps;
  public readonly s3Bucket: Bucket;
  public readonly cfDistribution: Distribution;
  public readonly acmCertificate?: ICertificate;
  public readonly hostedZone?: IHostedZone;

  constructor(scope: Construct, id: string, props: ExposedAssetBucketProps = {}) {
    super(scope, id);
    this.props = props;
    // create bucket
    this.s3Bucket = this.createS3Bucket(id);

    // create Custom Domain
    this.validateCustomDomainSettings();
    this.hostedZone = this.lookupHostedZone();
    this.acmCertificate = this.createCertificate();

    // create CloudFront
    this.cfDistribution = this.createCloudFrontDistribution();

    // Connect Custom Domain to CloudFront Distribution
    this.createRoute53Records();
  }

  private createS3Bucket(id: string): Bucket {
    const { s3Bucket } = this.props;

    return new Bucket(this, id, {
      autoDeleteObjects: true,
      removalPolicy: RemovalPolicy.DESTROY,
      cors: [
        {
          allowedOrigins: ['*'],
          allowedMethods: [HttpMethods.GET],
          allowedHeaders: ['*'],
          exposedHeaders: [],
        },
      ],
      ...(s3Bucket || {}),
    });
  }

  private createCloudFrontDistribution(): Distribution {
    const { cfDistribution, customDomain } = this.props;
    const cfDistributionProps = cfDistribution || {};

    // Validate input
    if (cfDistributionProps.certificate) {
      throw new Error(
        `Do not configure the "cfDistribution.certificate". Use the "customDomain" to configure the NextjsSite domain certificate.`
      );
    }
    if (cfDistributionProps.domainNames) {
      throw new Error(
        `Do not configure the "cfDistribution.domainNames". Use the "customDomain" to configure the NextjsSite domain.`
      );
    }

    // Build domainNames
    const domainNames = [];
    if (!customDomain) {
      // no domain
    } else if (typeof customDomain === 'string') {
      domainNames.push(customDomain);
    } else {
      domainNames.push(customDomain.domainName);
    }

    // Build behavior
    const origin = new S3Origin(this.s3Bucket);

    // Create Distribution
    return new Distribution(this, 'Distribution', {
      // Override props.
      ...cfDistributionProps,
      // these values can NOT be overwritten by cfDistributionProps
      domainNames,
      certificate: this.acmCertificate,
      defaultBehavior: {
        origin,
        ...(cfDistributionProps.defaultBehavior || {}),
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      additionalBehaviors: {
        ...(cfDistributionProps.additionalBehaviors || {}),
      },
    });
  }

  /////////////////////
  // Custom Domain
  /////////////////////

  protected validateCustomDomainSettings() {
    const { customDomain } = this.props;

    if (!customDomain) {
      return;
    }

    if (typeof customDomain === 'string') {
      return;
    }

    if (customDomain.isExternalDomain === true) {
      if (!customDomain.cdk?.certificate) {
        throw new Error(
          `A valid certificate is required when "isExternalDomain" is set to "true".`
        );
      }
      if (customDomain.domainAlias) {
        throw new Error(
          `Domain alias is only supported for domains hosted on Amazon Route 53. Do not set the "customDomain.domainAlias" when "isExternalDomain" is enabled.`
        );
      }
      if (customDomain.hostedZone) {
        throw new Error(
          `Hosted zones can only be configured for domains hosted on Amazon Route 53. Do not set the "customDomain.hostedZone" when "isExternalDomain" is enabled.`
        );
      }
    }
  }

  protected lookupHostedZone(): IHostedZone | undefined {
    const { customDomain } = this.props;

    // Skip if customDomain is not configured
    if (!customDomain) {
      return;
    }

    let hostedZone;

    if (typeof customDomain === 'string') {
      hostedZone = HostedZone.fromLookup(this, 'HostedZone', {
        domainName: customDomain,
      });
    } else if (isCDKConstruct(customDomain.hostedZone)) {
      hostedZone = customDomain.cdk?.hostedZone as IHostedZone;
    } else if (typeof customDomain.hostedZone === 'string') {
      hostedZone = HostedZone.fromLookup(this, 'HostedZone', {
        domainName: customDomain.hostedZone,
      });
    } else if (typeof customDomain.domainName === 'string') {
      // Skip if domain is not a Route53 domain
      if (customDomain.isExternalDomain === true) {
        return;
      }

      hostedZone = HostedZone.fromLookup(this, 'HostedZone', {
        domainName: customDomain.domainName,
      });
    } else {
      hostedZone = customDomain.hostedZone;
    }

    return hostedZone;
  }

  private createCertificate(): ICertificate | undefined {
    const { customDomain } = this.props;

    if (!customDomain) {
      return;
    }

    let acmCertificate;

    // HostedZone is set for Route 53 domains
    if (this.hostedZone) {
      if (typeof customDomain === 'string') {
        acmCertificate = new DnsValidatedCertificate(this, 'Certificate', {
          domainName: customDomain,
          hostedZone: this.hostedZone,
          region: 'us-east-1',
        });
      } else if (customDomain.cdk?.certificate) {
        acmCertificate = customDomain.cdk?.certificate;
      } else {
        acmCertificate = new DnsValidatedCertificate(this, 'Certificate', {
          domainName: customDomain.domainName,
          hostedZone: this.hostedZone,
          region: 'us-east-1',
        });
      }
    }
    // HostedZone is NOT set for non-Route 53 domains
    else {
      if (typeof customDomain !== 'string') {
        acmCertificate = customDomain.cdk?.certificate;
      }
    }

    return acmCertificate;
  }

  protected createRoute53Records(): void {
    const { customDomain } = this.props;

    if (!customDomain || !this.hostedZone) {
      return;
    }

    let recordName;
    let domainAlias;
    if (typeof customDomain === 'string') {
      recordName = customDomain;
    } else {
      recordName = customDomain.domainName;
      domainAlias = customDomain.domainAlias;
    }

    // Create DNS record
    const recordProps = {
      recordName,
      zone: this.hostedZone,
      target: RecordTarget.fromAlias(new CloudFrontTarget(this.cfDistribution)),
    };
    new ARecord(this, 'AliasRecord', recordProps);
    new AaaaRecord(this, 'AliasRecordAAAA', recordProps);

    // Create Alias redirect record
    if (domainAlias) {
      new HttpsRedirect(this, 'Redirect', {
        zone: this.hostedZone,
        recordNames: [domainAlias],
        targetDomain: recordName,
      });
    }
  }
}
