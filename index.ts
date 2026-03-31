import * as pulumi from "@pulumi/pulumi";
import { NextJsSite } from "@whiskey/pulumi-opennext-site";

const site = new NextJsSite("mattwyskiel-dotcom", {
    path: "src",
    environment: {
        CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID || "",
        CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN || "",
    },
    oldName: "site",
    customDomain:
        pulumi.getStack() === "prod"
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
            : undefined,
});

export const url = site.url;
