import {
  DynamoDBClient,
  ExecuteStatementCommand,
  ExecuteStatementInput,
} from '@aws-sdk/client-dynamodb';
import { unmarshall } from '@aws-sdk/util-dynamodb';
import { Table } from 'sst/node/table';

const dynamodbClient = new DynamoDBClient({ region: 'us-east-1' });

export class DynamoDBService {
  public static async getPageContent(page: string): Promise<Record<string, unknown>> {
    // Set the parameters
    const params: ExecuteStatementInput = {
      Statement: `SELECT * FROM "${Table.Table.tableName}" WHERE page=?`,
      Parameters: [{ S: page }],
    };
    const command = new ExecuteStatementCommand(params);

    const response = await dynamodbClient.send(command);
    return unmarshall(response.Items![0]) ?? {};
  }
}
