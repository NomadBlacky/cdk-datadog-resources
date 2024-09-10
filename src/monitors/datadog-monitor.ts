import { CfnResource, Construct } from '@aws-cdk/core';
// eslint-disable-next-line @typescript-eslint/no-require-imports
import camelcaseKeys = require('camelcase-keys');
import { MonitorOptions, MonitorType } from './properties';
import { DatadogCredentials } from '../common/properties';

export interface DatadogMonitorProps {
  /** Credentials for the Datadog API */
  readonly datadogCredentials: DatadogCredentials;

  /** The monitor query */
  readonly query: string;

  /** The type of the monitor */
  readonly type: MonitorType;

  /** A message to include with notifications for the monitor*/
  readonly message?: string;

  /** Name of the monitor */
  readonly name?: string;

  /** Tags associated with the monitor */
  readonly tags?: string[];

  /** The monitor options*/
  readonly options?: MonitorOptions;

  /** Whether or not the monitor is multi alert */
  readonly multi?: boolean;
}

/**
 * Datadog Monitor 3.0.0
 */
export class DatadogMonitor {
  constructor(scope: Construct, id: string, props: DatadogMonitorProps) {
    const cfnProperties = camelcaseKeys(props, {
      deep: true,
      pascalCase: true,
    });
    new CfnResource(scope, id, {
      type: 'Datadog::Monitors::Monitor',
      properties: { ...cfnProperties },
    });
  }
}
