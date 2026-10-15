# Use pagination and filtering

Collection endpoints return a `data` array and a `pagination` object. The API uses one-based page numbering.

## Set page size

Use these query parameters on supported collection operations:

| Parameter | Required | Rules |
|---|---:|---|
| `page` | No | Starts at `1`. The default is `1`. |
| `per_page` | No | Selects the number of records per page. Use a value from `1` through `100`; the default is `20`. |

The `pagination` object returns `page`, `per_page`, `total_items`, and `total_pages` so that a client can determine whether to request another page.

## Filter a device list

`GET /devices` supports these filters:

| Parameter | Values | Behavior |
|---|---|---|
| `status` | `active`, `inactive`, `maintenance` | Returns devices with the selected operational status. |
| `site_code` | A site identifier such as `SITE-001` | Returns devices assigned to that site. |

Device list results are ordered by `created_at` in ascending order, with the device ID used as a tie-breaker.

## Filter telemetry and alerts

- `GET /devices/{device_id}/telemetry` requires `from` and `to`. Add `metric` to return one metric name.
- `GET /devices/{device_id}/alerts` accepts `status` values of `open`, `acknowledged`, or `resolved`.

For telemetry and usage ranges, include the `from` boundary and exclude the `to` boundary. This makes adjacent ranges non-overlapping.

## Handle an invalid query

The API returns `400 invalid_request` for a malformed query, such as a `per_page` value outside the supported range. Check the response `error.message` and `error.request_id`, correct the request, and retry it.

## Related information

- [Query telemetry](../guides/query-telemetry.md)
- [Errors and troubleshooting](../operations/errors.md)
- [Interactive API reference](../reference/api-reference.md)
