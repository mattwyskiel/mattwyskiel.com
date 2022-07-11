import {
  DynamoDBClient,
  ExecuteStatementCommand,
  ExecuteStatementInput,
} from '@aws-sdk/client-dynamodb';
import { unmarshall } from '@aws-sdk/util-dynamodb';

export class DynamoDBController {
  public static async getPageContent(page: string): Promise<Record<string, unknown>> {
    // Set the parameters
    const dynamodbClient = new DynamoDBClient({ region: 'us-east-1' });
    const params: ExecuteStatementInput = {
      Statement: `SELECT * FROM "${process.env.TABLE_NAME}" WHERE page=?`,
      Parameters: [{ S: page }],
    };
    const command = new ExecuteStatementCommand(params);

    const response = await dynamodbClient.send(command);
    return unmarshall(response.Items![0]) ?? {};
  }
}
