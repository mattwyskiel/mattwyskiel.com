import { AssetsStack } from "./AssetsStack";
import { App } from "@serverless-stack/resources";

export default function (app: App) {
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    // srcPath: "services",
    bundle: {
      format: "esm",
    },
  });
  app.stack(AssetsStack);
}
