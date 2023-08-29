import { Template } from 'aws-cdk-lib/assertions';
import { Stack } from 'aws-cdk-lib';
import { DatadogDowntime } from '../../src/monitors/datadog-downtime';

test('Snapshot test', () => {
  const stack = new Stack();

  new DatadogDowntime(stack, 'TestMonitor', {
    datadogCredentials: {
      apiKey: 'DATADOG_API_KEY',
      applicationKey: 'DATADOG_APP_KEY',
    },
    scope: ['host:myserver', 'service:myservice'],
    start: 1624542715,
    end: 1624546321,
  });

  expect(Template.fromStack(stack)).toMatchSnapshot();
});