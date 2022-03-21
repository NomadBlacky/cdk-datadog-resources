import * as fs from 'fs';
import { Template } from 'aws-cdk-lib/assertions';
import { Stack } from 'aws-cdk-lib/core';
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

  const template = Template.fromStack(stack);
  expect(template).toMatchSnapshot();
});
