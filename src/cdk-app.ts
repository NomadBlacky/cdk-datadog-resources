import * as fs from 'fs';
import { App, Stack } from '@aws-cdk/core';
import { DatadogCredentials } from './common/properties';
import { DatadogDashboard } from './dashboards/datadog-dashboard';
import { DatadogMonitor } from './monitors/datadog-monitor';
import { MonitorType } from './monitors/properties';

const app = new App();
const stack = new Stack(app, 'CdkDatadogResourcesTestStack');

const datadogCredentials: DatadogCredentials = {
  apiKey: process.env.DATADOG_API_KEY!,
  applicationKey: process.env.DATADOG_APP_KEY!,
};

new DatadogMonitor(stack, 'TestMonitor', {
  datadogCredentials,
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

new DatadogDashboard(stack, 'TestDashboard', {
  datadogCredentials,
  dashboardDefinition: fs.readFileSync(`${__dirname}/../test/dashboards/dashboard-def.json`).toString(),
});
