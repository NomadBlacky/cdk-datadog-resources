import { CfnResource } from 'aws-cdk-lib';
import { Construct } from 'constructs';

// eslint-disable-next-line @typescript-eslint/no-require-imports
import camelcaseKeys = require('camelcase-keys');
import { DatadogCredentials } from '../common/properties';

export interface DatadogIntegrationAWSProps {
  /** Credentials for the Datadog API */
  readonly datadogCredentials: DatadogCredentials;

  /** The id of the account with which to integrate. */
  readonly accountId: string;

  /** The name of the created role. */
  readonly roleName: string;
}

/**
 * Datadog Integration 1.1.0
 */
export class DatadogIntegrationAWS {
  constructor(scope: Construct, id: string, props: DatadogIntegrationAWSProps) {
    const cfnProperties = camelcaseKeys(props, {
      deep: true,
      pascalCase: true,
    });
    // @ts-ignore
    delete Object.assign(cfnProperties, { AccountID: cfnProperties.AccountId }).AccountId;
    new CfnResource(scope, id, {
      type: 'Datadog::Integrations::AWS',
      properties: { ...cfnProperties },
    });
  }
}
