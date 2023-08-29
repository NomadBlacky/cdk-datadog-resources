import { CfnResource } from 'aws-cdk-lib';
import { Construct } from 'constructs';

// eslint-disable-next-line @typescript-eslint/no-require-imports
import camelcaseKeys = require('camelcase-keys');
import { DatadogCredentials } from '../common/properties';

export interface DatadogDowntimeProps {
  /** Credentials for the Datadog API */
  readonly datadogCredentials: DatadogCredentials;

  /** Whether or not this downtime is currently active */
  readonly active?: boolean;

  /** POSIX Timestamp of cancellation of this downtime (null if not canceled) */
  readonly canceled?: number;

  /** Id of the user who created this downtime */
  readonly creatorId?: number;

  /** Whether or not this downtime is disabled */
  readonly disabled?: boolean;

  /** Type of this downtime */
  readonly downtimeType?: number;

  /** POSIX timestamp to end the downtime. If not provided, the downtime is in effect indefinitely (i.e. until you cancel it). */
  readonly end?: number;

  /** Id of this downtime */
  readonly id?: number;

  /** Message on the downtime */
  readonly message?: string;

  /** A single monitor to which the downtime applies. If not provided, the downtime applies to all monitors. */
  readonly monitorId?: number;

  /** A comma-separated list of monitor tags, to which the downtime applies. The resulting downtime applies to monitors that match ALL provided monitor tags. */
  readonly monitorTags?: string[];

  /** The ID of the parent downtime to this one */
  readonly parentId?: number;

  /** The scope(s) to which the downtime applies */
  readonly scope: string[];

  /** POSIX timestamp to start the downtime. If not provided, the downtime starts the moment it is created. */
  readonly start?: number;

  /** The timezone for the downtime */
  readonly timezone?: string;

  /** Id of the user who updated this downtime */
  readonly updaterId?: number;
}

/**
 * Datadog Monitor Downtime 2.0.0
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
