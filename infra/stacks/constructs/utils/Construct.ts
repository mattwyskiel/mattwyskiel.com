import { Construct } from 'constructs';
const JSII_RTTI_SYMBOL_1 = Symbol.for('jsii.rtti');

export function isCDKConstruct(construct: any): construct is Construct {
  const fqn = construct?.constructor?.[JSII_RTTI_SYMBOL_1]?.fqn;
  return typeof fqn === 'string' && (fqn.startsWith('@aws-cdk/') || fqn.startsWith('aws-cdk-lib'));
}
