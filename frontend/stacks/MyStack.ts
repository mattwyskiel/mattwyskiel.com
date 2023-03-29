import {
  StackContext,
  StaticSite,
  StaticSiteDomainProps,
} from 'sst/constructs';

export function Site({ stack }: StackContext) {
  new StaticSite(stack, 'JekyllSite', {
    path: 'web',
    errorPage: '404.html',
    buildOutput: '_site',
    buildCommand: 'JEKYLL_ENV=production bundle exec jekyll build',
    customDomain: domain(stack.stage),
  });
}

const domain = (stage: string): StaticSiteDomainProps | undefined => {
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
