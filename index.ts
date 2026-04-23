import * as pulumi from "@pulumi/pulumi";
import { NextJsSite } from "@whiskey/pulumi-opennext-site";

const stack = pulumi.getStack();
const siteName = `mattwyskiel-dotcom-${stack}`;

const site = new NextJsSite(siteName, {
    path: "src",
    environment: {
        CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID || "",
        CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN || "",
        NEXT_PUBLIC_STACK: stack,
    },
    oldName: ["mattwyskiel-dotcom", "site"],
    customDomain:
        stack === "prod"
            ? {
                  mode: "existing",
                  domainName: "mattwyskiel.com",
                  certificateArn:
                      "arn:aws:acm:us-east-1:662292074719:certificate/441a3988-039c-482b-aefb-d49473ebeb23",
                  dns: {
                      mode: "route53",
                      hostedZoneName: "mattwyskiel.com",
                  },
              }
            : {
                  mode: "create",
                  domainName: `${stack}.mattwyskiel.com`,
                  hostedZoneName: "mattwyskiel.com",
                  includeWWW: false,
              },
});

export const url = site.url;
