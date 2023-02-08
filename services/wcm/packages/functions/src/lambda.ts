import { ApiHandler } from 'sst/node/api';
import middy from '@middy/core';
import validator from '@middy/validator';
import requestMonitoring from './middleware/request-monitoring';
import { DynamoDBController } from '../../../packages/core/src/services/dynamodb.service';

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
    body: JSON.stringify(
      await DynamoDBController.getPageContent(event.queryStringParameters!.page!)
    ),
  };
});

export const handler = middy(getPageContent)
  .use(requestMonitoring<typeof inputSchema>())
  .use(validator({ inputSchema }));
