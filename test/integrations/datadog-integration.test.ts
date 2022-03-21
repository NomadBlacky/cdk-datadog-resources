import { Template } from 'aws-cdk-lib/assertions';
import { Stack } from 'aws-cdk-lib/core';
import { DatadogIntegrationAWS } from '../../src/integrations/datadog-integration-aws';

test('Snapshot test', () => {
  const stack = new Stack();

  new DatadogIntegrationAWS(stack, 'TestIntegration', {
    datadogCredentials: {
      apiKey: 'DATADOG_API_KEY',
      applicationKey: 'DATADOG_APP_KEY',
    },
    accountId: '123456',
    roleName: 'DatadogAWSAcctRoleName',
  });

  const template = Template.fromStack(stack);
  expect(template).toMatchSnapshot();
});
