import { SSTConfig } from 'sst';
import { AssetsStack } from './stacks/AssetsStack';
import { API } from './stacks/APIStack';

export default {
  config(_input) {
    return {
      name: 'infra',
      region: 'us-east-1',
    };
  },
  stacks(app) {
    if (app.stage === 'prod') {
      app.setDefaultRemovalPolicy('retain');
    }
    app.stack(AssetsStack);
    app.stack(API);
  },
} satisfies SSTConfig;
