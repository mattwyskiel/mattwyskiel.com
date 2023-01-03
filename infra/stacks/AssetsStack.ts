import { StackContext } from '@serverless-stack/resources';
import { ExposedAssetBucket } from './constructs/AssetBucket';

export function AssetsStack({ stack }: StackContext) {
  const bucket = new ExposedAssetBucket(stack, 'AssetsBucket', {
    customDomain:
      stack.stage === 'prod'
        ? 'assets.mattwyskiel.com'
        : 'assets-dev.mattwyskiel.com',
    s3Bucket: {
      bucketName:
        stack.stage === 'prod'
          ? 'com.mattwyskiel.assets'
          : 'com.mattwyskiel.assets-dev',
    },
  });

  stack.addOutputs({
    assetsURL: bucket.cfDistribution.domainName,
  });
}
