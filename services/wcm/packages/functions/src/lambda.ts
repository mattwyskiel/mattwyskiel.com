import { ApiHandler } from 'sst/node/api';
import middy from '@middy/core';
import validator from '@middy/validator';
import { transpileSchema } from '@middy/validator/transpile';
import requestMonitoring from './middleware/request-monitoring';
import { DynamoDBService } from '../../../packages/core/src/services/dynamodb.service';

const inputSchema = {
  type: 'object',
  properties: {
    queryStringParameters: {
      type: 'object',
      properties: {
        page: { type: 'string' },
      },
      required: ['page'],
    },
  },
  required: ['queryStringParameters'],
} as const;

export const getPageContent = ApiHandler(async event => {
  return {
    body: JSON.stringify(await DynamoDBService.getPageContent(event.queryStringParameters!.page!)),
  };
});

export const handler = middy(getPageContent)
  .use(requestMonitoring<typeof inputSchema>())
  .use(validator({ eventSchema: transpileSchema(inputSchema) }));
