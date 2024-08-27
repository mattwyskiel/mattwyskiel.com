/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "mattwyskiel-web",
      removal: input?.stage === "live" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    new sst.aws.Nextjs("Website", {
      domain:
        $app.stage === "live"
          ? {
              name: "mattwyskiel.com",
              aliases: ["www.mattwyskiel.com"],
              dns: sst.aws.dns({ override: true }),
            }
          : undefined,
    });
  },
});
