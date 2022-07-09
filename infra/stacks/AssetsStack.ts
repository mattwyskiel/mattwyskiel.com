import { StackContext, Api, Bucket } from "@serverless-stack/resources";
import { ExposedAssetBucket } from "./constructs/AssetBucket";

export function AssetsStack({ stack }: StackContext) {
  const bucket = new ExposedAssetBucket(stack, "AssetsBucket", {
    customDomain: "assets.mattwyskiel.com",
  });

  stack.addOutputs({
    assetsURL: bucket.cfDistribution.domainName,
  });
}
