# Device Operations API v2.1.0 — Release Notes

**Release date:** October 5, 2026  
**Audience:** Platform administrators, integration developers, and operations teams

> This independent portfolio sample uses fictional systems and data. It demonstrates release-note structure, impact communication, upgrade guidance, and known-issue writing.

## Summary

Version 2.1.0 adds alert-resolution support, improves telemetry queries, and standardizes validation errors for integration clients.

## New features

### Resolve alerts through the API

Authorized clients can resolve an open or acknowledged alert by calling `POST /devices/{device_id}/alerts/{alert_id}/resolve`. Clients can include an optional resolution note for the operations history.

### Filter telemetry by metric

The telemetry endpoint now accepts a `metric` query parameter in addition to the required `from` and `to` timestamps. Requests can also use pagination to keep response sizes predictable.

### Standard error response

Validation and authorization errors now use the same response shape:

```json
{
  "error": {
    "code": "invalid_request",
    "message": "The value of per_page must be between 1 and 100.",
    "request_id": "req_01HXYZ123ABC"
  }
}
```

## Improvements

- Added `Retry-After` guidance to rate-limit responses.
- Added examples for device registration and telemetry queries.
- Improved validation messages for invalid date ranges and page sizes.
- Added `operationId` values to all documented operations for client generation.

## Fixed issues

- Corrected the description of the exclusive `to` timestamp in telemetry queries.
- Prevented duplicate device registration when the same natural key is submitted twice.
- Corrected the documented response code for successful device deactivation to `204 No Content`.

## Compatibility and upgrade notes

- Version 2.1.0 is backward compatible with v2 clients.
- No request fields were removed or renamed.
- Clients that parse error messages should migrate to the structured `error.code` field.
- Review rate-limit handling before increasing polling frequency.

## Known issue

The first telemetry point may not be available immediately after device registration. Clients should retry with exponential backoff when the response contains no data.

## Documentation changes

- Updated the [Device Operations API reference](../../API-Documentation/README.md).
- Added request and response examples for authentication, device registration, and telemetry queries.
