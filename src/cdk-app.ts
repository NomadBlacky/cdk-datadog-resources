import * as fs from 'fs';
import { App, Stack } from 'aws-cdk-lib/core';
import { DatadogCredentials } from './common/properties';
import { DatadogDashboard } from './dashboards/datadog-dashboard';
import { DatadogIntegrationAWS } from './integrations/datadog-integration-aws';
import { DatadogDowntime } from './monitors/datadog-downtime';
import { DatadogMonitor } from './monitors/datadog-monitor';
import { MonitorType } from './monitors/properties';
import { DatadogIAMUser } from './users/datadog-user';

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

new DatadogDowntime(stack, 'TestDowntime', {
  datadogCredentials,
  message: 'Setting downtime on this monitor during regular maintenance',
  monitorId: 40427544,
  scope: ['*'],
  start: 1909141686,
  timezone: 'Asia/Tokyo',
});

new DatadogIAMUser(stack, 'TestUser', {
  datadogCredentials,
  accessRole: 'st',
  email: 'nomadblacky@gmail.com',
  handle: 'nomadblacky@gmail.com',
  name: 'NomadBlacky',
});

new DatadogIntegrationAWS(stack, 'TestIntegration', {
  datadogCredentials,
  accountId: process.env.AWS_ACCOUNT_ID!,
  roleName: 'DatadogIntegrationRole',
});
