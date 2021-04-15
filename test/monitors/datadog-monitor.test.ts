import { Stack } from '@aws-cdk/core';
import { DatadogMonitor } from '../../src/monitors/datadog-monitor';

test('Snapshot test', () => {
  const stack = new Stack();

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

  expect(stack).toMatchSnapshot();
});
