# Retrieve a usage summary

Use `GET /devices/{device_id}/usage-summary` to retrieve one aggregate for one metric and time range.

## Provide a metric and time range

The request requires `metric`, `from`, and `to`. The `from` boundary is inclusive and the `to` boundary is exclusive.

```bash
curl --request GET "http://127.0.0.1:4010/devices/DEV-2024-001842/usage-summary?metric=energy&from=2026-10-01T00:00:00Z&to=2026-10-08T00:00:00Z" \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  --header "Accept: application/json"
```

## Interpret the response

The response includes:

- `device_id`: the device included in the aggregate.
- `metric`: the selected metric.
- `from` and `to`: the requested UTC range.
- `total`: the numeric aggregate.
- `unit`: the unit associated with `total`.

## Recover from failures

The API returns `400 invalid_request` when a required query parameter is missing or malformed. It returns `404 resource_not_found` when the device is unavailable. Check the response `error.message` and include `error.request_id` when reporting the issue.

## Related information

- [Telemetry and alerts](../concepts/telemetry-and-alerts.md)
- [cURL usage example](https://github.com/Nilesh21-gunjal/Technical-Writing-Portfolio/blob/Main/API-Documentation/examples/curl/get-usage-summary.sh)
- [Usage reference](../reference/api-reference.md)
