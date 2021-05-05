import { App, Stack } from '@aws-cdk/core';
import { DatadogMonitor } from './monitors/datadog-monitor';
import { MonitorType } from './monitors/properties';

const app = new App();
const stack = new Stack(app, 'CdkDatadogResourcesTestStack');

new DatadogMonitor(stack, 'TestMonitor', {
  datadogCredentials: {
    apiKey: process.env.DATADOG_API_KEY || 'DATADOG_API_KEY',
    applicationKey: process.env.DATADOG_APP_KEY || 'DATADOG_APP_KEY',
  },
  query: 'avg(last_1h):sum:system.cpu.system{host:host0} > 100',
  type: MonitorType.QUERY_ALERT,
  name: 'Test Monitor',
  options: {
    thresholds: {
      critical: 100,
      warning: 80,
      oK: 90,
    },
    notifyNoData: true,
    evaluationDelay: 60,
  },
});
