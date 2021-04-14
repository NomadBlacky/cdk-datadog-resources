import { CfnResource, Construct, Resource } from '@aws-cdk/core';
import { DatadogCredentials, Type } from './properties';

export interface DatadogMonitorProps {
  /**
   * Credentials for the Datadog API
   */
  datadogCredentials: DatadogCredentials;
  /**
   * The monitor query
   */
  query: string;
  /**
   * The type of the monitor
   */
  type: Type;
}

/**
 * Datadog Monitor 3.0.0
 */
export class DatadogMonitor extends Resource {
  constructor(scope: Construct, id: string, props: DatadogMonitorProps) {
    super(scope, id);
    new CfnResource(this, 'DatadogMonitor', {
      type: 'Datadog::Monitors::Monitor',
      properties: {
        DatadogCredentials: {
          ApiKey: props.datadogCredentials.apiKey,
          ApplicationKey: props.datadogCredentials.applicationKey,
          ApiURL: props.datadogCredentials.apiURL,
        },
        Query: props.query,
        Type: props.type,
      },
    });
  }
}
