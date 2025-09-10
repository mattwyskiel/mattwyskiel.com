import * as pulumi from "@pulumi/pulumi";
import { NextJsSite } from "./nextjs";

const site = new NextJsSite("site", {
  path: "src",
  environment: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID || "",
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  },
  customDomain:
    pulumi.getStack() === "prod"
      ? {
          name: "mattwyskiel.com",
        }
      : undefined,
});

export const url = site.url;

