import { SSTConfig } from 'sst';
import { MyStack } from './stacks/MyStack';

export default {
  config() {
    return { name: 'mattwyskiel-dotcom-wcm', region: 'us-east-1' };
  },
  stacks(app) {
    app.setDefaultFunctionProps({
      runtime: 'nodejs16.x',
      architecture: 'arm_64',
    });
    app.stack(MyStack);
  },
} satisfies SSTConfig;
