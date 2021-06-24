import { SynthUtils } from '@aws-cdk/assert';
import { Stack } from '@aws-cdk/core';
import { DatadogIAMUser } from '../../src/users/datadog-user';

test('Snapshot test', () => {
  const stack = new Stack();

  new DatadogIAMUser(stack, 'TestUser', {
  	datadogCredentials: {
      apiKey: 'DATADOG_API_KEY',
      applicationKey: 'DATADOG_APP_KEY',
    },
    email: "jane.doe@example.com",
    name: "name_example",
    handle: "title_example",
    disabled: false,
  });
  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});