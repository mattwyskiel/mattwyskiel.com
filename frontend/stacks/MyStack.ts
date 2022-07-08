import { StackContext, NextjsDomainProps, NextjsSite } from '@serverless-stack/resources';

export function MyStack({ stack }: StackContext) {
  const site = new NextjsSite(stack, 'Site', {
    path: 'src',
    customDomain: domain(stack.stage),
  });

  stack.addOutputs({
    url: site.url,
    publicURL: site.customDomainUrl ?? 'undefined',
  });
}

const domain = (stage: string): NextjsDomainProps | undefined => {
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
