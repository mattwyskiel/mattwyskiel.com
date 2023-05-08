import { CloudFrontRequestHandler } from 'aws-lambda';

export const handler: CloudFrontRequestHandler = async event => {
  const data = {
    webcredentials: {
      apps: ['5XPCB5TC44.com.mattwyskiel.WhiskeyHub'],
    },
    applinks: {
      details: [
        {
          appIDs: ['5XPCB5TC44.com.mattwyskiel.WhiskeyHub'],
          components: [
            {
              '/': '/plaid/*',
              comment: 'Matches any URL path whose path starts with /plaid/',
            },
          ],
        },
      ],
    },
  };

  return {
    status: '200',
    statusDescription: 'OK',
    headers: {
      'content-type': [
        {
          key: 'Content-Type',
          value: 'application/json',
        },
      ],
    },
    body: JSON.stringify(data),
  };
};
