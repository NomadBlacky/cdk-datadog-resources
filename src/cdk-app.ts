import { App, Stack } from '@aws-cdk/core';
import { DatadogMonitor } from './monitors/datadog-monitor';

const app = new App();
const stack = new Stack(app, 'CdkDatadogResourcesTestStack');

new DatadogMonitor(stack, 'TestMonitor', {
  DatadogCredentials: {
    ApiKey: process.env.DATADOG_API_KEY || 'DATADOG_API_KEY',
    ApplicationKey: process.env.DATADOG_APP_KEY || 'DATADOG_APP_KEY',
  },
  Query: 'avg(last_1h):sum:system.cpu.system{host:host0} > 100',
  Type: 'query alert',
  Name: 'Test Monitor',
  Options: {
    Thresholds: {
      Critical: 100,
      Warning: 80,
      OK: 90,
    },
    NotifyNoData: true,
    EvaluationDelay: 60,
  },
});
