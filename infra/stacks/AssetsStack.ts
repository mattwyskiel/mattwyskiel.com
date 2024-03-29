import { StackContext } from 'sst/constructs';
import { ExposedAssetBucket } from './constructs/AssetBucket';
import { Duration } from 'aws-cdk-lib';

export function AssetsStack({ stack }: StackContext) {
  const bucket = new ExposedAssetBucket(stack, 'AssetsBucket', {
    customDomain: {
      domainName: stack.stage === 'prod' ? 'assets.mattwyskiel.com' : 'assets-dev.mattwyskiel.com',
      hostedZone: 'mattwyskiel.com',
    },
    s3Bucket: {
      bucketName: stack.stage === 'prod' ? 'com.mattwyskiel.assets' : 'com.mattwyskiel.assets-dev',
      lifecycleRules: [
        {
          abortIncompleteMultipartUploadAfter: Duration.days(3),
        },
      ],
    },
  });

  stack.addOutputs({
    assetsURL: bucket.cfDistribution.domainName,
  });
}
