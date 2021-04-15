/**
 * Credentials for the Datadog API
 */
export interface DatadogCredentials {
  /** Datadog API key */
  readonly ApiKey: string;
  /** Datadog application key */
  readonly ApplicationKey: string;
  /** Datadog API URL (defaults to https://api.datadoghq.com) Use https://api.datadoghq.eu for EU accounts. */
  readonly ApiURL?: string;
}

export type MonitorType =
  | 'composite'
  | 'event alert'
  | 'log alert'
  | 'metric alert'
  | 'process alert'
  | 'query alert'
  | 'service check'
  | 'synthetics alert'
  | 'trace-analytics alert';

export interface MonitorOptions {
  /** Whether or not to include a sample of the logs */
  readonly EnableLogsSample?: boolean;
  /** Message to include with a re-notification when renotify_interval is set */
  readonly EscalationMessage?: string;
  /** Time in seconds to delay evaluation */
  readonly EvaluationDelay?: number;
  /** Whether or not to include triggering tags into notification title */
  readonly IncludeTags?: boolean;
  /** Whether or not changes to this monitor should be restricted to the creator or admins */
  readonly Locked?: boolean;
  /** Number of locations allowed to fail before triggering alert */
  readonly MinLocationFailed?: number;
  /** Time in seconds to allow a host to start reporting data before starting the evaluation of monitor results */
  readonly NewHostDelay?: number;
  /** Number of minutes data stopped reporting before notifying */
  readonly NoDataTimeframe?: number;
  /** Whether or not to notify tagged users when changes are made to the monitor */
  readonly NotifyAudit?: boolean;
  /** Whether or not to notify when data stops reporting */
  readonly NotifyNoData?: boolean;
  /** Number of minutes after the last notification before the monitor re-notifies on the current status */
  readonly RenotifyInterval?: number;
  /** Whether or not the monitor requires a full window of data before it is evaluated */
  readonly RequireFullWindow?: boolean;
  /** ID of the corresponding synthetics check */
  readonly SyntheticsCheckID?: number;
  /** The threshold definitions */
  readonly Thresholds?: MonitorThresholds;
  /** The threshold window definitions */
  readonly ThresholdWindows?: MonitorThresholdWindows;
  /** Number of hours of the monitor not reporting data before it automatically resolves */
  readonly TimeoutH?: number;
}

export interface MonitorThresholds {
  /** Threshold value for triggering an alert */
  readonly Critical?: number;
  /** Threshold value for recovering from an alert state */
  readonly CriticalRecovery?: number;
  /** Threshold value for recovering from an alert state */
  readonly OK?: number;
  /** Threshold value for triggering a warning */
  readonly Warning?: number;
  /** Threshold value for recovering from a warning state */
  readonly WarningRecovery?: number;
}

export interface MonitorThresholdWindows {
  /** How long a metric must be anomalous before triggering an alert */
  TriggerWindow?: string;
  /** How long an anomalous metric must be normal before recovering from an alert state */
  RecoveryWindow?: string;
}
