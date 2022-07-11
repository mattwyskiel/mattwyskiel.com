import middy from '@middy/core';
import validator from '@middy/validator';
import { APIGatewayProxyHandlerV2 } from 'aws-lambda';
import { json } from 'lib/lambda-utils';
import requestMonitoring from '../lib/middleware/request-monitoring';
import { DynamoDBController } from '../services/dynamodb.service';

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

const getPageContent: APIGatewayProxyHandlerV2 = async event => {
  return json(await DynamoDBController.getPageContent(event.queryStringParameters!.page!));
};

export const handler = middy(getPageContent)
  .use(requestMonitoring<typeof inputSchema>())
  .use(validator({ inputSchema }));
