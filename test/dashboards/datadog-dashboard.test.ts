import * as fs from 'fs';
import { SynthUtils } from '@aws-cdk/assert';
import { Stack } from '@aws-cdk/core';
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

  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});
