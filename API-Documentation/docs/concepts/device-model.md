# Understand the device model and lifecycle

A device is the central resource in the Device Operations API. It represents a connected sensor, controller, or gateway assigned to one site.

## Identify a device

Each device has two identifiers with different purposes:

| Field | Assigned by | Use |
|---|---|---|
| `id` | API | Use this stable identifier in device, telemetry, alert, and usage paths. It follows the `DEV-YYYY-NNNNNN` pattern. |
| `external_id` | Caller | Use this natural key to prevent duplicate registrations. It must be unique within this fictional sample and is immutable after registration. |

The API returns `409 duplicate_external_id` when a registration uses an existing `external_id`.

## Provide the required registration data

Registering a device requires the following values:

- `external_id`
- `name`
- `device_type`: `sensor`, `controller`, or `gateway`
- `site.site_code` and `site.timezone`
- `manufacturer`
- `model`
- `communication_protocol`: `HTTPS`, `MQTT`, or `OPC_UA`

The server assigns `id`, `created_at`, and `updated_at` after registration.

## Manage operational status

The API defines three operational status values:

| Status | Meaning |
|---|---|
| `inactive` | The default status after registration. |
| `active` | The device is active. |
| `maintenance` | The device is temporarily in maintenance. |

Use `PATCH /devices/{device_id}` to update the `name` or `status`. The API does not allow changes to the external ID, device type, site, manufacturer, model, or communication protocol after registration.

Use `DELETE /devices/{device_id}` to set the status to `inactive`. The operation returns `204 No Content` and does not delete audit history.

## Work with timestamps

All documented timestamps are UTC timestamps in RFC 3339 date-time format, such as `2026-10-01T09:00:00Z`.

## Related tasks

- [Register a device](../guides/register-device.md)
- [Manage a device](../guides/manage-devices.md)
- [Device reference](../reference/api-reference.md)
