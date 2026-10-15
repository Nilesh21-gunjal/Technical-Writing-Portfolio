# Register a device

Register a device before you request its telemetry, alerts, or usage summary. Registration creates a device in the `inactive` status.

## Before you begin

- Obtain a bearer token as described in [Authentication](../get-started/authentication.md).
- Choose an `external_id` that is unique within this API sample.
- Collect the device type, site, manufacturer, model, and communication protocol.

## Send the registration request

Call `POST /devices` with all required fields:

```bash
curl --request POST "http://127.0.0.1:4010/devices" \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "external_id": "LD-SENSOR-042",
    "name": "Loading dock sensor",
    "device_type": "sensor",
    "site": {"site_code": "SITE-001", "timezone": "UTC"},
    "manufacturer": "Example Devices",
    "model": "Edge-100",
    "communication_protocol": "MQTT"
  }'
```

## Verify the response

The API returns `201 Created`, a `Location` header for the new resource, and a device object. Save the API-assigned `id`; use it in subsequent device paths.

The server generates `id`, `created_at`, and `updated_at`. It sets `status` to `inactive` when it creates the record.

## Recover from common failures

| Status | Error code | Recovery |
|---:|---|---|
| `400` | `invalid_request` | Check that the JSON body is well formed. |
| `401` | `invalid_token` | Request a new token and send it as `Bearer YOUR_ACCESS_TOKEN`. |
| `409` | `duplicate_external_id` | Use the existing device record or choose a different external ID. |
| `422` | `validation_failed` | Correct the field that violates a documented format, enum, or business rule. |

## Use tested examples

- [cURL example](https://github.com/Nilesh21-gunjal/Technical-Writing-Portfolio/blob/Main/API-Documentation/examples/curl/register-device.sh)
- [Python example](https://github.com/Nilesh21-gunjal/Technical-Writing-Portfolio/blob/Main/API-Documentation/examples/python/register_device.py)
- [JavaScript example](https://github.com/Nilesh21-gunjal/Technical-Writing-Portfolio/blob/Main/API-Documentation/examples/javascript/register-device.mjs)

## Next step

[Manage a device](manage-devices.md) to retrieve, update, or deactivate the record.
