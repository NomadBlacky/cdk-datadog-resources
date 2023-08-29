import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { DatadogIAMUser } from '../../src/users/datadog-user';

test('Snapshot test', () => {
  const stack = new Stack();

  new DatadogIAMUser(stack, 'TestUser', {
  	datadogCredentials: {
      apiKey: 'DATADOG_API_KEY',
      applicationKey: 'DATADOG_APP_KEY',
    },
    email: 'jane.doe@example.com',
    name: 'name_example',
    handle: 'title_example',
    disabled: false,
  });
  expect(Template.fromStack(stack)).toMatchSnapshot();
});