# AWS CDK Datadog Resources

An AWS CDK construct library that wrapped [DataDog/datadog-cloudformation-resources](https://github.com/DataDog/datadog-cloudformation-resources).

## Requirements

Before use this library, [register datadog-cloudformation-resources to your AWS account.](https://github.com/DataDog/datadog-cloudformation-resources#datadog-aws-cloudformation)

You need to register the correct version listed in `Supported Resources`.

## Supported CDK Languages

- TypeScript

## Supported Resources

| Supported? | Resource                | Name                             | Description                                              | Datadog CF Version |
| :--------: | ----------------------- | -------------------------------- | -------------------------------------------------------- | ------------------ |
|            | Dashboards              | `Datadog::Dashboards::Dashboard` | [Create, update, and delete Datadog dashboards.][1]      | N/A                |
|            | Datadog-AWS integration | `Datadog::Integrations::AWS`     | [Manage your Datadog-Amazon Web Service integration.][2] | N/A                |
|     ✅     | Monitors                | `Datadog::Monitors::Monitor`     | [Create, update, and delete Datadog monitors.][3]        | [3.0.0][6]         |
|            | Downtimes               | `Datadog::Monitors::Downtime`    | [Enable or disable downtimes for your monitors.][4]      | N/A                |
|            | User                    | `Datadog::IAM::User`             | [ Create and manage Datadog users.][5]                   | N/A                |

## Installation

TypeScript

```shell
npm install --save-dev @nomadblacky/cdk-datadog-resources
```

## Usage

Belows are examples of TypeScript.

### Monitors

```typescript
import { App, Stack } from '@aws-cdk/core';
import { DatadogMonitor } from '@nomadblacky/cdk-datadog-resources';

const app = new App();
const stack = new Stack(app, 'CdkDatadogResourcesTestStack');

new DatadogMonitor(stack, 'TestMonitor', {
  datadogCredentials: {
    apiKey: process.env.DATADOG_API_KEY || 'DATADOG_API_KEY',
    applicationKey: process.env.DATADOG_APP_KEY || 'DATADOG_APP_KEY',
  },
  query: 'avg(last_1h):sum:system.cpu.system{host:host0} > 100',
  type: 'query alert',
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
```

[1]: https://github.com/DataDog/datadog-cloudformation-resources/tree/master/datadog-dashboards-dashboard-handler
[2]: https://github.com/DataDog/datadog-cloudformation-resources/tree/master/datadog-integrations-aws-handler
[3]: https://github.com/DataDog/datadog-cloudformation-resources/tree/master/datadog-monitors-monitor-handler
[4]: https://github.com/DataDog/datadog-cloudformation-resources/tree/master/datadog-monitors-downtime-handler
[5]: https://github.com/DataDog/datadog-cloudformation-resources/tree/master/datadog-iam-user-handler
[6]: https://github.com/DataDog/datadog-cloudformation-resources/blob/master/datadog-monitors-monitor-handler/CHANGELOG.md#300--2021-02-16
