# Understand telemetry and alerts

Telemetry and alerts are child resources of a device. Use the device ID returned by registration or a device-list response to access them.

## Telemetry

A telemetry point has four required fields:

| Field | Description |
|---|---|
| `timestamp` | UTC time when the device reported the measurement. |
| `metric` | Name of the measured quantity, such as `temperature`. |
| `value` | Numeric measurement. |
| `unit` | Unit associated with the numeric value, such as `celsius`. |

`GET /devices/{device_id}/telemetry` returns telemetry in ascending timestamp order. Supply an inclusive `from` timestamp and an exclusive `to` timestamp. Optionally add `metric` to request one metric name.

## Alerts

An alert describes a device condition that needs review or has already been resolved. The API returns alerts in descending `created_at` order, from newest to oldest.

| Status | Meaning |
|---|---|
| `open` | The condition requires attention. |
| `acknowledged` | The condition has been seen but remains unresolved. |
| `resolved` | The condition has been resolved. |

Alert severity can be `info`, `warning`, or `critical`. A resolved alert cannot be resolved again; the API returns `409 alert_already_resolved`.

## Usage summaries

`GET /devices/{device_id}/usage-summary` returns one aggregate for one metric over a requested time range. The `from` timestamp is inclusive and the `to` timestamp is exclusive. The response includes the selected metric, time range, numeric `total`, and its `unit`.

## Related tasks

- [Query telemetry](../guides/query-telemetry.md)
- [Resolve an alert](../guides/resolve-alert.md)
- [Retrieve a usage summary](../guides/retrieve-usage.md)
