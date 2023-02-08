import { SSTConfig } from 'sst';
import { AssetsStack } from './stacks/AssetsStack';

export default {
  config(_input) {
    return {
      name: 'infra',
      region: 'us-east-1',
    };
  },
  stacks(app) {
    app.stack(AssetsStack);
  },
} satisfies SSTConfig;
