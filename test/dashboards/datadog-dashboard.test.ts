import * as fs from 'fs';
import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { DatadogDashboard } from '../../src/dashboards/datadog-dashboard';

test('Snapshot test', () => {
  const stack = new Stack();

  const dashboardDefJson = fs.readFileSync(`${__dirname}/dashboard-def.json`).toString();

  new DatadogDashboard(stack, 'TestMonitor', {
    datadogCredentials: {
      apiKey: 'DATADOG_API_KEY',
      applicationKey: 'DATADOG_APP_KEY',
    },
    dashboardDefinition: dashboardDefJson,
  });

  expect(Template.fromStack(stack)).toMatchSnapshot();
});
