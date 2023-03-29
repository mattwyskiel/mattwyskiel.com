import { StackContext, StaticSite } from 'sst/constructs';

export function Site({ stack }: StackContext) {
  new StaticSite(stack, 'JekyllSite', {
    path: 'web',
    errorPage: '404.html',
    buildOutput: '_site',
    buildCommand: 'bundle exec jekyll build',
  });
}
