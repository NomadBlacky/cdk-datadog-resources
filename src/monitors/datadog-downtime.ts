import { CfnResource, Construct } from '@aws-cdk/core';
import * as camelcaseKeys from 'camelcase-keys';
import { DatadogCredentials } from '../common/properties';

export interface DatadogDowntimeProps {
  /** Credentials for the Datadog API */
  readonly datadogCredentials: DatadogCredentials;

  /** Required scope */
  readonly scope: string;
}

/**
 * Datadog Monitors 2.0.0
 */
export class DatadogDowntime {
  constructor(scope: Construct, id: string, props: DatadogDowntimeProps) {
    const cfnProperties = camelcaseKeys(props, {
      deep: true,
      pascalCase: true,
    });
    new CfnResource(scope, id, {
      type: 'Datadog::Monitors::Downtime',
      properties: { ...cfnProperties },
    });
  }
}