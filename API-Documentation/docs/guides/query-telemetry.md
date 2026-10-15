# Query telemetry

Retrieve measurements for one device and time range with `GET /devices/{device_id}/telemetry`.

## Before you begin

- Obtain a bearer token.
- Identify the API-assigned device ID.
- Choose a UTC start and end time. The `from` boundary is inclusive and the `to` boundary is exclusive.

## Request telemetry

Send the required `from` and `to` query parameters. Add `metric` to return one measurement type:

```bash
curl --request GET "http://127.0.0.1:4010/devices/DEV-2024-001842/telemetry?from=2026-10-01T00:00:00Z&to=2026-10-02T00:00:00Z&metric=temperature&page=1&per_page=20" \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  --header "Accept: application/json"
```

The API returns telemetry points in ascending timestamp order. Each point contains `timestamp`, `metric`, `value`, and `unit`.

## Process additional pages

Read `pagination.page` and `pagination.total_pages`. If the current page is lower than `total_pages`, request the next `page` value with the same filter and time range.

## Recover from failures

| Problem | Likely response | Recovery |
|---|---|---|
| A boundary is missing or malformed | `400 invalid_request` | Send valid UTC date-time values for both `from` and `to`. |
| The device ID is unavailable | `404 resource_not_found` | Confirm the device ID before retrying. |
| The page size is unsupported | `400 invalid_request` | Use `per_page` from `1` through `100`. |

## Related information

- [Pagination and filtering](../concepts/pagination-and-filtering.md)
- [cURL telemetry example](https://github.com/Nilesh21-gunjal/Technical-Writing-Portfolio/blob/Main/API-Documentation/examples/curl/list-telemetry.sh)
- [Telemetry reference](../reference/api-reference.md)
