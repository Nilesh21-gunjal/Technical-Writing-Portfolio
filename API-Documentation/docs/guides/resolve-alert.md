# Resolve an alert

Resolve an `open` or `acknowledged` alert when the underlying condition has been addressed.

## List the device alerts

First, retrieve alerts for the device:

```bash
curl --request GET "http://127.0.0.1:4010/devices/DEV-2024-001842/alerts?status=open" \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  --header "Accept: application/json"
```

Save the alert `id` from the response.

## Mark the alert as resolved

Call `POST /devices/{device_id}/alerts/{alert_id}/resolve`. The `resolution_note` is optional:

```bash
curl --request POST "http://127.0.0.1:4010/devices/DEV-2024-001842/alerts/ALT-2026-000041/resolve" \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  --header "Content-Type: application/json" \
  --data '{"resolution_note":"Reviewed by the operations team."}'
```

The API returns the updated alert with `status` set to `resolved` and a `resolved_at` timestamp.

## Recover from failures

- The API returns `404 resource_not_found` when the device or alert is unavailable.
- The API returns `409 alert_already_resolved` when you try to resolve an alert that is already resolved. Do not retry this request.
- The API returns `422 validation_failed` when `resolution_note` violates a documented rule.

## Related information

- [Telemetry and alerts](../concepts/telemetry-and-alerts.md)
- [Errors and troubleshooting](../operations/errors.md)
- [cURL alert-resolution example](https://github.com/Nilesh21-gunjal/Technical-Writing-Portfolio/blob/Main/API-Documentation/examples/curl/resolve-alert.sh)
