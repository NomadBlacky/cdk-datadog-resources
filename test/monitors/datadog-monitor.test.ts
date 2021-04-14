import { Stack } from '@aws-cdk/core';
import { DatadogMonitor } from '../../src/monitors/datadog-monitor';

test('Snapshot test', () => {
  const stack = new Stack();

  new DatadogMonitor(stack, 'TestMonitor', {
    datadogCredentials: {
      apiKey: 'DATADOG_API_KEY',
      applicationKey: 'DATADOG_APPLICATION_KEY',
    },
    query: 'avg(last_1h):sum:system.cpu.system{host:host0} > 100',
    type: 'query alert',
  });

  expect(stack).toMatchSnapshot();
});
