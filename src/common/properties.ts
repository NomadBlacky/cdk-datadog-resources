/**
 * Credentials for the Datadog API
 */
export interface DatadogCredentials {
  /** Datadog API key */
  readonly apiKey: string;
  /** Datadog application key */
  readonly applicationKey: string;
  /** Datadog API URL (defaults to https://api.datadoghq.com) Use https://api.datadoghq.eu for EU accounts. */
  readonly apiURL?: string;
}
