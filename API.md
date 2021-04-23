# API Reference

**Classes**

Name|Description
----|-----------
[DatadogMonitor](#nomadblacky-cdk-datadog-resources-datadogmonitor)|Datadog Monitor 3.0.0.


**Structs**

Name|Description
----|-----------
[DatadogCredentials](#nomadblacky-cdk-datadog-resources-datadogcredentials)|Credentials for the Datadog API.
[DatadogMonitorProps](#nomadblacky-cdk-datadog-resources-datadogmonitorprops)|*No description*
[MonitorOptions](#nomadblacky-cdk-datadog-resources-monitoroptions)|*No description*
[MonitorThresholdWindows](#nomadblacky-cdk-datadog-resources-monitorthresholdwindows)|*No description*
[MonitorThresholds](#nomadblacky-cdk-datadog-resources-monitorthresholds)|*No description*



## class DatadogMonitor  <a id="nomadblacky-cdk-datadog-resources-datadogmonitor"></a>

Datadog Monitor 3.0.0.


### Initializer




```ts
new DatadogMonitor(scope: Construct, id: string, props: DatadogMonitorProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[DatadogMonitorProps](#nomadblacky-cdk-datadog-resources-datadogmonitorprops)</code>)  *No description*
  * **datadogCredentials** (<code>[DatadogCredentials](#nomadblacky-cdk-datadog-resources-datadogcredentials)</code>)  Credentials for the Datadog API. 
  * **query** (<code>string</code>)  The monitor query. 
  * **type** (<code>string</code>)  The type of the monitor. 
  * **message** (<code>string</code>)  A message to include with notifications for the monitor. __*Optional*__
  * **multi** (<code>boolean</code>)  Whether or not the monitor is multi alert. __*Optional*__
  * **name** (<code>string</code>)  Name of the monitor. __*Optional*__
  * **options** (<code>[MonitorOptions](#nomadblacky-cdk-datadog-resources-monitoroptions)</code>)  The monitor options. __*Optional*__
  * **tags** (<code>Array<string></code>)  Tags associated with the monitor. __*Optional*__




## struct DatadogCredentials  <a id="nomadblacky-cdk-datadog-resources-datadogcredentials"></a>


Credentials for the Datadog API.



Name | Type | Description 
-----|------|-------------
**apiKey** | <code>string</code> | Datadog API key.
**applicationKey** | <code>string</code> | Datadog application key.
**apiURL**? | <code>string</code> | Datadog API URL (defaults to https://api.datadoghq.com) Use https://api.datadoghq.eu for EU accounts.<br/>__*Optional*__



## struct DatadogMonitorProps  <a id="nomadblacky-cdk-datadog-resources-datadogmonitorprops"></a>






Name | Type | Description 
-----|------|-------------
**datadogCredentials** | <code>[DatadogCredentials](#nomadblacky-cdk-datadog-resources-datadogcredentials)</code> | Credentials for the Datadog API.
**query** | <code>string</code> | The monitor query.
**type** | <code>string</code> | The type of the monitor.
**message**? | <code>string</code> | A message to include with notifications for the monitor.<br/>__*Optional*__
**multi**? | <code>boolean</code> | Whether or not the monitor is multi alert.<br/>__*Optional*__
**name**? | <code>string</code> | Name of the monitor.<br/>__*Optional*__
**options**? | <code>[MonitorOptions](#nomadblacky-cdk-datadog-resources-monitoroptions)</code> | The monitor options.<br/>__*Optional*__
**tags**? | <code>Array<string></code> | Tags associated with the monitor.<br/>__*Optional*__



## struct MonitorOptions  <a id="nomadblacky-cdk-datadog-resources-monitoroptions"></a>






Name | Type | Description 
-----|------|-------------
**enableLogsSample**? | <code>boolean</code> | Whether or not to include a sample of the logs.<br/>__*Optional*__
**escalationMessage**? | <code>string</code> | Message to include with a re-notification when renotify_interval is set.<br/>__*Optional*__
**evaluationDelay**? | <code>number</code> | Time in seconds to delay evaluation.<br/>__*Optional*__
**includeTags**? | <code>boolean</code> | Whether or not to include triggering tags into notification title.<br/>__*Optional*__
**locked**? | <code>boolean</code> | Whether or not changes to this monitor should be restricted to the creator or admins.<br/>__*Optional*__
**minLocationFailed**? | <code>number</code> | Number of locations allowed to fail before triggering alert.<br/>__*Optional*__
**newHostDelay**? | <code>number</code> | Time in seconds to allow a host to start reporting data before starting the evaluation of monitor results.<br/>__*Optional*__
**noDataTimeframe**? | <code>number</code> | Number of minutes data stopped reporting before notifying.<br/>__*Optional*__
**notifyAudit**? | <code>boolean</code> | Whether or not to notify tagged users when changes are made to the monitor.<br/>__*Optional*__
**notifyNoData**? | <code>boolean</code> | Whether or not to notify when data stops reporting.<br/>__*Optional*__
**renotifyInterval**? | <code>number</code> | Number of minutes after the last notification before the monitor re-notifies on the current status.<br/>__*Optional*__
**requireFullWindow**? | <code>boolean</code> | Whether or not the monitor requires a full window of data before it is evaluated.<br/>__*Optional*__
**syntheticsCheckID**? | <code>number</code> | ID of the corresponding synthetics check.<br/>__*Optional*__
**thresholdWindows**? | <code>[MonitorThresholdWindows](#nomadblacky-cdk-datadog-resources-monitorthresholdwindows)</code> | The threshold window definitions.<br/>__*Optional*__
**thresholds**? | <code>[MonitorThresholds](#nomadblacky-cdk-datadog-resources-monitorthresholds)</code> | The threshold definitions.<br/>__*Optional*__
**timeoutH**? | <code>number</code> | Number of hours of the monitor not reporting data before it automatically resolves.<br/>__*Optional*__



## struct MonitorThresholdWindows  <a id="nomadblacky-cdk-datadog-resources-monitorthresholdwindows"></a>






Name | Type | Description 
-----|------|-------------
**recoveryWindow**? | <code>string</code> | How long an anomalous metric must be normal before recovering from an alert state.<br/>__*Optional*__
**triggerWindow**? | <code>string</code> | How long a metric must be anomalous before triggering an alert.<br/>__*Optional*__



## struct MonitorThresholds  <a id="nomadblacky-cdk-datadog-resources-monitorthresholds"></a>






Name | Type | Description 
-----|------|-------------
**critical**? | <code>number</code> | Threshold value for triggering an alert.<br/>__*Optional*__
**criticalRecovery**? | <code>number</code> | Threshold value for recovering from an alert state.<br/>__*Optional*__
**oK**? | <code>number</code> | Threshold value for recovering from an alert state.<br/>__*Optional*__
**warning**? | <code>number</code> | Threshold value for triggering a warning.<br/>__*Optional*__
**warningRecovery**? | <code>number</code> | Threshold value for recovering from a warning state.<br/>__*Optional*__



