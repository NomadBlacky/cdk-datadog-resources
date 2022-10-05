# API Reference

**Classes**

Name|Description
----|-----------
[DatadogDashboard](#nomadblacky-cdk-datadog-resources-datadogdashboard)|Datadog Dashboard 1.0.0.
[DatadogDowntime](#nomadblacky-cdk-datadog-resources-datadogdowntime)|Datadog Monitor Downtime 2.0.0.
[DatadogIAMUser](#nomadblacky-cdk-datadog-resources-datadogiamuser)|Datadog Application User 1.2.0.
[DatadogIntegrationAWS](#nomadblacky-cdk-datadog-resources-datadogintegrationaws)|Datadog Integration 1.1.0.
[DatadogMonitor](#nomadblacky-cdk-datadog-resources-datadogmonitor)|Datadog Monitor 3.0.0.


**Structs**

Name|Description
----|-----------
[DatadogCredentials](#nomadblacky-cdk-datadog-resources-datadogcredentials)|Credentials for the Datadog API.
[DatadogDashboardProps](#nomadblacky-cdk-datadog-resources-datadogdashboardprops)|*No description*
[DatadogDowntimeProps](#nomadblacky-cdk-datadog-resources-datadogdowntimeprops)|*No description*
[DatadogIAMUserProps](#nomadblacky-cdk-datadog-resources-datadogiamuserprops)|*No description*
[DatadogIntegrationAWSProps](#nomadblacky-cdk-datadog-resources-datadogintegrationawsprops)|*No description*
[DatadogMonitorProps](#nomadblacky-cdk-datadog-resources-datadogmonitorprops)|*No description*
[MonitorOptions](#nomadblacky-cdk-datadog-resources-monitoroptions)|*No description*
[MonitorThresholdWindows](#nomadblacky-cdk-datadog-resources-monitorthresholdwindows)|*No description*
[MonitorThresholds](#nomadblacky-cdk-datadog-resources-monitorthresholds)|*No description*


**Enums**

Name|Description
----|-----------
[MonitorType](#nomadblacky-cdk-datadog-resources-monitortype)|The type of the monitor.



## class DatadogDashboard  <a id="nomadblacky-cdk-datadog-resources-datadogdashboard"></a>

Datadog Dashboard 1.0.0.


### Initializer




```ts
new DatadogDashboard(scope: Construct, id: string, props: DatadogDashboardProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[DatadogDashboardProps](#nomadblacky-cdk-datadog-resources-datadogdashboardprops)</code>)  *No description*
  * **dashboardDefinition** (<code>string</code>)  JSON string of the dashboard definition. 
  * **datadogCredentials** (<code>[DatadogCredentials](#nomadblacky-cdk-datadog-resources-datadogcredentials)</code>)  Credentials for the Datadog API. __*Optional*__




## class DatadogDowntime  <a id="nomadblacky-cdk-datadog-resources-datadogdowntime"></a>

Datadog Monitor Downtime 2.0.0.


### Initializer




```ts
new DatadogDowntime(scope: Construct, id: string, props: DatadogDowntimeProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[DatadogDowntimeProps](#nomadblacky-cdk-datadog-resources-datadogdowntimeprops)</code>)  *No description*
  * **scope** (<code>Array<string></code>)  The scope(s) to which the downtime applies. 
  * **active** (<code>boolean</code>)  Whether or not this downtime is currently active. __*Optional*__
  * **canceled** (<code>number</code>)  POSIX Timestamp of cancellation of this downtime (null if not canceled). __*Optional*__
  * **creatorId** (<code>number</code>)  Id of the user who created this downtime. __*Optional*__
  * **datadogCredentials** (<code>[DatadogCredentials](#nomadblacky-cdk-datadog-resources-datadogcredentials)</code>)  Credentials for the Datadog API. __*Optional*__
  * **disabled** (<code>boolean</code>)  Whether or not this downtime is disabled. __*Optional*__
  * **downtimeType** (<code>number</code>)  Type of this downtime. __*Optional*__
  * **end** (<code>number</code>)  POSIX timestamp to end the downtime. __*Optional*__
  * **id** (<code>number</code>)  Id of this downtime. __*Optional*__
  * **message** (<code>string</code>)  Message on the downtime. __*Optional*__
  * **monitorId** (<code>number</code>)  A single monitor to which the downtime applies. __*Optional*__
  * **monitorTags** (<code>Array<string></code>)  A comma-separated list of monitor tags, to which the downtime applies. __*Optional*__
  * **parentId** (<code>number</code>)  The ID of the parent downtime to this one. __*Optional*__
  * **start** (<code>number</code>)  POSIX timestamp to start the downtime. __*Optional*__
  * **timezone** (<code>string</code>)  The timezone for the downtime. __*Optional*__
  * **updaterId** (<code>number</code>)  Id of the user who updated this downtime. __*Optional*__




## class DatadogIAMUser  <a id="nomadblacky-cdk-datadog-resources-datadogiamuser"></a>

Datadog Application User 1.2.0.


### Initializer




```ts
new DatadogIAMUser(scope: Construct, id: string, props: DatadogIAMUserProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[DatadogIAMUserProps](#nomadblacky-cdk-datadog-resources-datadogiamuserprops)</code>)  *No description*
  * **accessRole** (<code>string</code>)  The role of the user. __*Optional*__
  * **datadogCredentials** (<code>[DatadogCredentials](#nomadblacky-cdk-datadog-resources-datadogcredentials)</code>)  Credentials for the Datadog API. __*Optional*__
  * **disabled** (<code>boolean</code>)  Whether or not the user is disabled. __*Optional*__
  * **email** (<code>string</code>)  User email. __*Optional*__
  * **handle** (<code>string</code>)  User handle (a valid email). __*Optional*__
  * **name** (<code>string</code>)  User name. __*Optional*__
  * **verified** (<code>boolean</code>)  Whether or not the user is verified. __*Optional*__




## class DatadogIntegrationAWS  <a id="nomadblacky-cdk-datadog-resources-datadogintegrationaws"></a>

Datadog Integration 1.1.0.


### Initializer




```ts
new DatadogIntegrationAWS(scope: Construct, id: string, props: DatadogIntegrationAWSProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[DatadogIntegrationAWSProps](#nomadblacky-cdk-datadog-resources-datadogintegrationawsprops)</code>)  *No description*
  * **accountId** (<code>string</code>)  The id of the account with which to integrate. 
  * **roleName** (<code>string</code>)  The name of the created role. 
  * **datadogCredentials** (<code>[DatadogCredentials](#nomadblacky-cdk-datadog-resources-datadogcredentials)</code>)  Credentials for the Datadog API. __*Optional*__




## class DatadogMonitor  <a id="nomadblacky-cdk-datadog-resources-datadogmonitor"></a>

Datadog Monitor 3.0.0.


### Initializer




```ts
new DatadogMonitor(scope: Construct, id: string, props: DatadogMonitorProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[DatadogMonitorProps](#nomadblacky-cdk-datadog-resources-datadogmonitorprops)</code>)  *No description*
  * **query** (<code>string</code>)  The monitor query. 
  * **type** (<code>[MonitorType](#nomadblacky-cdk-datadog-resources-monitortype)</code>)  The type of the monitor. 
  * **datadogCredentials** (<code>[DatadogCredentials](#nomadblacky-cdk-datadog-resources-datadogcredentials)</code>)  Credentials for the Datadog API. __*Optional*__
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



## struct DatadogDashboardProps  <a id="nomadblacky-cdk-datadog-resources-datadogdashboardprops"></a>






Name | Type | Description 
-----|------|-------------
**dashboardDefinition** | <code>string</code> | JSON string of the dashboard definition.
**datadogCredentials**? | <code>[DatadogCredentials](#nomadblacky-cdk-datadog-resources-datadogcredentials)</code> | Credentials for the Datadog API.<br/>__*Optional*__



## struct DatadogDowntimeProps  <a id="nomadblacky-cdk-datadog-resources-datadogdowntimeprops"></a>






Name | Type | Description 
-----|------|-------------
**scope** | <code>Array<string></code> | The scope(s) to which the downtime applies.
**active**? | <code>boolean</code> | Whether or not this downtime is currently active.<br/>__*Optional*__
**canceled**? | <code>number</code> | POSIX Timestamp of cancellation of this downtime (null if not canceled).<br/>__*Optional*__
**creatorId**? | <code>number</code> | Id of the user who created this downtime.<br/>__*Optional*__
**datadogCredentials**? | <code>[DatadogCredentials](#nomadblacky-cdk-datadog-resources-datadogcredentials)</code> | Credentials for the Datadog API.<br/>__*Optional*__
**disabled**? | <code>boolean</code> | Whether or not this downtime is disabled.<br/>__*Optional*__
**downtimeType**? | <code>number</code> | Type of this downtime.<br/>__*Optional*__
**end**? | <code>number</code> | POSIX timestamp to end the downtime.<br/>__*Optional*__
**id**? | <code>number</code> | Id of this downtime.<br/>__*Optional*__
**message**? | <code>string</code> | Message on the downtime.<br/>__*Optional*__
**monitorId**? | <code>number</code> | A single monitor to which the downtime applies.<br/>__*Optional*__
**monitorTags**? | <code>Array<string></code> | A comma-separated list of monitor tags, to which the downtime applies.<br/>__*Optional*__
**parentId**? | <code>number</code> | The ID of the parent downtime to this one.<br/>__*Optional*__
**start**? | <code>number</code> | POSIX timestamp to start the downtime.<br/>__*Optional*__
**timezone**? | <code>string</code> | The timezone for the downtime.<br/>__*Optional*__
**updaterId**? | <code>number</code> | Id of the user who updated this downtime.<br/>__*Optional*__



## struct DatadogIAMUserProps  <a id="nomadblacky-cdk-datadog-resources-datadogiamuserprops"></a>






Name | Type | Description 
-----|------|-------------
**accessRole**? | <code>string</code> | The role of the user.<br/>__*Optional*__
**datadogCredentials**? | <code>[DatadogCredentials](#nomadblacky-cdk-datadog-resources-datadogcredentials)</code> | Credentials for the Datadog API.<br/>__*Optional*__
**disabled**? | <code>boolean</code> | Whether or not the user is disabled.<br/>__*Optional*__
**email**? | <code>string</code> | User email.<br/>__*Optional*__
**handle**? | <code>string</code> | User handle (a valid email).<br/>__*Optional*__
**name**? | <code>string</code> | User name.<br/>__*Optional*__
**verified**? | <code>boolean</code> | Whether or not the user is verified.<br/>__*Optional*__



## struct DatadogIntegrationAWSProps  <a id="nomadblacky-cdk-datadog-resources-datadogintegrationawsprops"></a>






Name | Type | Description 
-----|------|-------------
**accountId** | <code>string</code> | The id of the account with which to integrate.
**roleName** | <code>string</code> | The name of the created role.
**datadogCredentials**? | <code>[DatadogCredentials](#nomadblacky-cdk-datadog-resources-datadogcredentials)</code> | Credentials for the Datadog API.<br/>__*Optional*__



## struct DatadogMonitorProps  <a id="nomadblacky-cdk-datadog-resources-datadogmonitorprops"></a>






Name | Type | Description 
-----|------|-------------
**query** | <code>string</code> | The monitor query.
**type** | <code>[MonitorType](#nomadblacky-cdk-datadog-resources-monitortype)</code> | The type of the monitor.
**datadogCredentials**? | <code>[DatadogCredentials](#nomadblacky-cdk-datadog-resources-datadogcredentials)</code> | Credentials for the Datadog API.<br/>__*Optional*__
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



## enum MonitorType  <a id="nomadblacky-cdk-datadog-resources-monitortype"></a>

The type of the monitor.

Name | Description
-----|-----
**COMPOSITE** |
**EVENT_ALERT** |
**LOG_ALERT** |
**METRIC_ALERT** |
**PROCESS_ALERT** |
**QUERY_ALERT** |
**SERVICE_CHECK** |
**SYNTHETICS_ALERT** |
**TRACE_ANALYTICS_ALERT** |


