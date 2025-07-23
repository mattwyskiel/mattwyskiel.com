import * as pulumi from "@pulumi/pulumi";
import * as vercel from "@pulumiverse/vercel";

const envSuffix = pulumi.getStack() === "prod" ? "" : `-${pulumi.getStack()}`;

const project = new vercel.Project("mattwyskiel-dotcom", {
  name: `mattwyskiel.com${envSuffix}`,
  framework: "nextjs",
});

export const projectId = project.id;
