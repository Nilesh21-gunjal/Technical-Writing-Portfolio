# Manage a device

Use the device ID to retrieve the current record, update its mutable properties, or deactivate it.

## Retrieve a device

Call `GET /devices/{device_id}` to retrieve the current configuration and operational status:

```bash
curl --request GET "http://127.0.0.1:4010/devices/DEV-2024-001842" \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  --header "Accept: application/json"
```

The response includes the immutable identity fields, the current `name` and `status`, the site assignment, and the API timestamps.

## Update a name or status

Call `PATCH /devices/{device_id}`. Update only `name` and `status`:

```bash
curl --request PATCH "http://127.0.0.1:4010/devices/DEV-2024-001842" \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  --header "Content-Type: application/json" \
  --data '{"name":"Loading dock temperature sensor","status":"maintenance"}'
```

The request body must contain at least one mutable property. The API returns the updated device object with a new `updated_at` timestamp.

## Deactivate a device

Call `DELETE /devices/{device_id}` to set the status to `inactive` without removing the audit history:

```bash
curl --request DELETE "http://127.0.0.1:4010/devices/DEV-2024-001842" \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

The expected response is `204 No Content`.

## Recover from failures

- If the device ID does not exist or is not available to the caller, the API returns `404 resource_not_found`.
- If a PATCH request includes a non-mutable field or an unsupported status, correct the request and retry it after reviewing the `422 validation_failed` response.
- If the request receives `429 rate_limit_exceeded`, wait for the number of seconds in `Retry-After` before retrying.

## Related information

- [Device model and lifecycle](../concepts/device-model.md)
- [Interactive API reference](../reference/api-reference.md)
- [Errors and troubleshooting](../operations/errors.md)
