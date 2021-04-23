import { CfnResource, Construct, Resource } from '@aws-cdk/core';
import { DatadogCredentials, MonitorOptions, MonitorType } from './properties';

export interface DatadogMonitorProps {
  /** Credentials for the Datadog API */
  readonly DatadogCredentials: DatadogCredentials;

  /** The monitor query */
  readonly Query: string;

  /** The type of the monitor */
  readonly Type: MonitorType;

  /** A message to include with notifications for the monitor*/
  readonly Message?: string;

  /** Name of the monitor */
  readonly Name?: string;

  /** Tags associated with the monitor */
  readonly Tags?: string[];

  /** The monitor options*/
  readonly Options?: MonitorOptions;

  /** Whether or not the monitor is multi alert */
  readonly Multi?: boolean;
}

/**
 * Datadog Monitor 3.0.0
 */
export class DatadogMonitor extends Resource {
  constructor(scope: Construct, id: string, props: DatadogMonitorProps) {
    super(scope, id);
    new CfnResource(this, 'DatadogMonitor', {
      type: 'Datadog::Monitors::Monitor',
      properties: { ...props },
    });
  }
}
