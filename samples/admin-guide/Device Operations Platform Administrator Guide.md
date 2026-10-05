# Device Operations Platform — Administrator Guide Sample

> This independent portfolio sample uses fictional systems and data. It demonstrates prerequisites, task steps, verification, and troubleshooting.

## Configure an alert rule

Use this procedure to create a threshold alert for an active device.

### Before you begin

- Confirm that you have an administrator token.
- Confirm the device is registered and has an `active` status.
- Confirm the threshold value uses the device metric's configured unit.

### Procedure

1. Open the **Alert rules** page.
2. Select **Create alert rule**.
3. Enter a name that identifies the device and condition, for example `DEV-2024-001842-temperature`.
4. Select **Temperature** as the metric.
5. Enter the threshold value and evaluation interval.
6. Select the notification channels.
7. Select **Save**.

### Verify the configuration

1. Open the device's **Alert rules** tab.
2. Confirm that the rule status is **Enabled**.
3. Confirm that the threshold, evaluation interval, and notification channels are correct.
4. Record the configuration change in the administrator audit log.

## Troubleshooting

### The alert rule is not enabled

Confirm that the device is active and that the threshold is valid for the selected metric. If the rule remains disabled, review the audit log using the request ID.

### Notifications are not delivered

Confirm that the notification endpoint is reachable and that the configured recipient has not been disabled. Review the delivery status before creating a duplicate rule.

### The threshold cannot be saved

Check that the value is within the supported range and that the administrator token has permission to change alert configuration.

## Related documentation

- [Device Operations API reference](../../API-Documentation/README.md)
- [Device Operations API v2.1.0 release notes](../release-notes/Device%20Operations%20API%20v2.1.0%20Release%20Notes.md)
