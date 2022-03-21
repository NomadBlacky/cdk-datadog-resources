import { Template } from 'aws-cdk-lib/assertions';
import { Stack } from 'aws-cdk-lib/core';
import { DatadogMonitor, MonitorType } from '../../src';

test('Snapshot test', () => {
  const stack = new Stack();

  new DatadogMonitor(stack, 'TestMonitor', {
    datadogCredentials: {
      apiKey: 'DATADOG_API_KEY',
      applicationKey: 'DATADOG_APP_KEY',
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

  const template = Template.fromStack(stack);
  expect(template).toMatchSnapshot();
});
