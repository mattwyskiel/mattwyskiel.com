import { SSTConfig } from 'sst';
import { Site } from './stacks/MyStack';

export default {
  config(_input) {
    return {
      name: 'frontend',
      region: 'us-east-1',
    };
  },
  stacks(app) {
    app.stack(Site);
  },
} satisfies SSTConfig;
