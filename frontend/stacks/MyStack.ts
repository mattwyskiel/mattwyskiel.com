import { Function, StackContext, StaticSite, StaticSiteDomainProps } from 'sst/constructs';
import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { LambdaEdgeEventType } from 'aws-cdk-lib/aws-cloudfront';

export function Site({ stack }: StackContext) {
  const site = new StaticSite(stack, 'JekyllSite', {
    path: 'web',
    errorPage: '404.html',
    buildOutput: '_site',
    buildCommand: 'JEKYLL_ENV=production bundle exec jekyll build',
    customDomain: domain(stack.stage),
  });

  const appleAppSiteAssociation = new Function(stack, 'AppleAppSiteAssociation', {
    handler: 'packages/well-known/src/apple-app-site-association.handler',
  });

  site.cdk?.distribution.addBehavior(
    '.well-known/apple-app-site-association',
    new S3Origin(site.cdk.bucket),
    {
      edgeLambdas: [
        {
          functionVersion: appleAppSiteAssociation.currentVersion,
          eventType: LambdaEdgeEventType.ORIGIN_REQUEST,
        },
      ],
    }
  );
}

const domain = (stage: string): StaticSiteDomainProps | undefined => {
  switch (stage) {
    case 'prod':
      return {
        domainName: 'mattwyskiel.com',
        domainAlias: 'www.mattwyskiel.com',
      };
    case 'dev':
      return {
        hostedZone: 'mattwyskiel.com',
        domainName: 'develop.mattwyskiel.com',
      };
    default:
      return undefined;
  }
};
