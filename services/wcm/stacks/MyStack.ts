import { StackContext, Api, Table } from 'sst/constructs';

export function MyStack({ stack }: StackContext) {
  const table = new Table(stack, 'Table', {
    fields: {
      page: 'string',
    },
    primaryIndex: {
      partitionKey: 'page',
    },
  });

  const api = new Api(stack, 'api', {
    routes: {
      'GET /page-content': 'services/functions/lambda.handler',
    },
  });
  api.bind([table]);

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
