import { StackContext, Api, Table } from '@serverless-stack/resources';

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
      'GET /page-content': 'functions/lambda.handler',
    },
    defaults: {
      function: {
        permissions: [table],
        environment: {
          TABLE_NAME: table.tableName,
        },
      },
    },
  });
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
