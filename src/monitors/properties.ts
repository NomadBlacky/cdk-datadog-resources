/**
 * The type of the monitor
 */
export enum MonitorType {
  COMPOSITE = 'composite',
  EVENT_ALERT = 'event alert',
  LOG_ALERT = 'log alert',
  METRIC_ALERT = 'metric alert',
  PROCESS_ALERT = 'process alert',
  QUERY_ALERT = 'query alert',
  SERVICE_CHECK = 'service check',
  SYNTHETICS_ALERT = 'synthetics alert',
  TRACE_ANALYTICS_ALERT = 'trace-analytics alert',
}

export interface MonitorOptions {
  /** Whether or not to include a sample of the logs */
  readonly enableLogsSample?: boolean;
  /** Message to include with a re-notification when renotify_interval is set */
  readonly escalationMessage?: string;
  /** Time in seconds to delay evaluation */
  readonly evaluationDelay?: number;
  /** Whether or not to include triggering tags into notification title */
  readonly includeTags?: boolean;
  /** Whether or not changes to this monitor should be restricted to the creator or admins */
  readonly locked?: boolean;
  /** Number of locations allowed to fail before triggering alert */
  readonly minLocationFailed?: number;
  /** Time in seconds to allow a host to start reporting data before starting the evaluation of monitor results */
  readonly newHostDelay?: number;
  /** Number of minutes data stopped reporting before notifying */
  readonly noDataTimeframe?: number;
  /** Whether or not to notify tagged users when changes are made to the monitor */
  readonly notifyAudit?: boolean;
  /** Whether or not to notify when data stops reporting */
  readonly notifyNoData?: boolean;
  /** Number of minutes after the last notification before the monitor re-notifies on the current status */
  readonly renotifyInterval?: number;
  /** Whether or not the monitor requires a full window of data before it is evaluated */
  readonly requireFullWindow?: boolean;
  /** ID of the corresponding synthetics check */
  readonly syntheticsCheckID?: number;
  /** The threshold definitions */
  readonly thresholds?: MonitorThresholds;
  /** The threshold window definitions */
  readonly thresholdWindows?: MonitorThresholdWindows;
  /** Number of hours of the monitor not reporting data before it automatically resolves */
  readonly timeoutH?: number;
}

export interface MonitorThresholds {
  /** Threshold value for triggering an alert */
  readonly critical?: number;
  /** Threshold value for recovering from an alert state */
  readonly criticalRecovery?: number;
  /** Threshold value for recovering from an alert state */
  readonly oK?: number;
  /** Threshold value for triggering a warning */
  readonly warning?: number;
  /** Threshold value for recovering from a warning state */
  readonly warningRecovery?: number;
}

export interface MonitorThresholdWindows {
  /** How long a metric must be anomalous before triggering an alert */
  readonly triggerWindow?: string;
  /** How long an anomalous metric must be normal before recovering from an alert state */
  readonly recoveryWindow?: string;
}
