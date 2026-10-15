# Tutorial: complete a device workflow

In this tutorial, you obtain a token, register a fictional device, retrieve telemetry, resolve an alert, and request a usage summary.

> Note: Run this tutorial against the local Prism mock. The mock returns documented examples and does not persist the registration or process a real device workflow. Use the documented `DEV-2024-001842` and `ALT-2026-000041` example IDs in the later steps.

## Before you begin

Start the local mock as described in the [Quickstart](../get-started/quickstart.md). Set these shell variables in a second terminal:

```bash
BASE_URL="http://127.0.0.1:4010"
TOKEN="eyJhbGciOiJIUzI1NiJ9.demo-token"
DEVICE_ID="DEV-2024-001842"
ALERT_ID="ALT-2026-000041"
```

## 1. Obtain an access token

```bash
curl --request POST "$BASE_URL/auth/token" \
  --header "Content-Type: application/json" \
  --data '{"client_id":"demo-client","client_secret":"demo-secret"}'
```

Expected result: a JSON body with `access_token`, `token_type`, and `expires_in`.

## 2. Register the device

```bash
curl --request POST "$BASE_URL/devices" \
  --header "Authorization: Bearer $TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "external_id":"LD-SENSOR-042",
    "name":"Loading dock sensor",
    "device_type":"sensor",
    "site":{"site_code":"SITE-001","timezone":"UTC"},
    "manufacturer":"Example Devices",
    "model":"Edge-100",
    "communication_protocol":"MQTT"
  }'
```

Expected result: `201 Created` and a device object whose default `status` is `inactive`.

## 3. Retrieve telemetry

```bash
curl --request GET "$BASE_URL/devices/$DEVICE_ID/telemetry?from=2026-10-01T00:00:00Z&to=2026-10-02T00:00:00Z&metric=temperature" \
  --header "Authorization: Bearer $TOKEN"
```

Expected result: a `data` array containing a `temperature` point and a `pagination` object.

## 4. Resolve an alert

```bash
curl --request POST "$BASE_URL/devices/$DEVICE_ID/alerts/$ALERT_ID/resolve" \
  --header "Authorization: Bearer $TOKEN" \
  --header "Content-Type: application/json" \
  --data '{"resolution_note":"Reviewed by the operations team."}'
```

Expected result: an alert with `status` set to `resolved` and a populated `resolved_at` value.

## 5. Retrieve a usage summary

```bash
curl --request GET "$BASE_URL/devices/$DEVICE_ID/usage-summary?metric=energy&from=2026-10-01T00:00:00Z&to=2026-10-08T00:00:00Z" \
  --header "Authorization: Bearer $TOKEN"
```

Expected result: a response with the selected metric, range, numeric `total`, and `unit`.

## What to do next

- Use the [interactive API reference](../reference/api-reference.md) to inspect the request and response schemas.
- Read [Errors and troubleshooting](../operations/errors.md) before integrating error handling.
- Run the [Postman collection](https://github.com/Nilesh21-gunjal/Technical-Writing-Portfolio/tree/Main/API-Documentation/postman) or the validated examples from the repository.
