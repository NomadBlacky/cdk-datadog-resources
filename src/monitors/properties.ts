/**
 * Credentials for the Datadog API
 */
export interface DatadogCredentials {
  /**
   * Datadog API key
   */
  readonly apiKey: string;
  /**
   * Datadog application key
   */
  readonly applicationKey: string;
  /**
   * Datadog API URL (defaults to https://api.datadoghq.com) Use https://api.datadoghq.eu for EU accounts.
   */
  readonly apiURL?: string;
}

export type Type =
  | 'composite'
  | 'event alert'
  | 'log alert'
  | 'metric alert'
  | 'process alert'
  | 'query alert'
  | 'service check'
  | 'synthetics alert'
  | 'trace-analytics alert';
