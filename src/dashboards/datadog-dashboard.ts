import { CfnResource, Construct } from '@aws-cdk/core';
import * as camelcaseKeys from 'camelcase-keys';
import { DatadogCredentials } from '../common/properties';

export interface DatadogDashboardProps {
  /** Credentials for the Datadog API */
  readonly datadogCredentials: DatadogCredentials;

  /** JSON string of the dashboard definition */
  readonly dashboardDefinition: string;
}

/**
 * Datadog Dashboard 1.0.0
 */
export class DatadogDashboard {
  constructor(scope: Construct, id: string, props: DatadogDashboardProps) {
    const cfnProperties = camelcaseKeys(props, {
      deep: true,
      pascalCase: true,
    });
    new CfnResource(scope, id, {
      type: 'Datadog::Dashboards::Dashboard',
      properties: { ...cfnProperties },
    });
  }
}