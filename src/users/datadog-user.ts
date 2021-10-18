import { CfnResource, Construct } from '@aws-cdk/core';
// eslint-disable-next-line @typescript-eslint/no-require-imports
import camelcaseKeys = require('camelcase-keys');
import { DatadogCredentials } from '../common/properties';

export interface DatadogIAMUserProps {
  /** Credentials for the Datadog API */
  readonly datadogCredentials: DatadogCredentials;

  /** The role of the user */
  readonly accessRole?: string;

  /** Whether or not the user is disabled */
  readonly disabled?: boolean;

  /** User email */
  readonly email?: string;

  /** User handle (a valid email) */
  readonly handle?: string;

  /** User name */
  readonly name?: string;

  /** Whether or not the user is verified */
  readonly verified?: boolean;
}

/**
 * Datadog Application User 1.2.0
 */
export class DatadogIAMUser {
  constructor(scope: Construct, id: string, props: DatadogIAMUserProps) {
    const cfnProperties = camelcaseKeys(props, {
      deep: true,
      pascalCase: true,
    });
    new CfnResource(scope, id, {
      type: 'Datadog::IAM::User',
      properties: { ...cfnProperties },
    });
  }
}
