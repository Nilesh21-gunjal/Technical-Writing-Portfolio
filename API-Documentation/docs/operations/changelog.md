# Changelog

This changelog summarizes the fictional Device Operations API sample. It reuses the published portfolio release-notes sample and does not describe a production service.

## 2.1.0 — October 5, 2026

### Added

- `POST /devices/{device_id}/alerts/{alert_id}/resolve` to resolve an open or acknowledged alert with an optional resolution note.
- A `metric` filter and pagination guidance for telemetry queries.
- A consistent error response containing `code`, `message`, and `request_id`.

### Improved

- Added `Retry-After` guidance for `429` responses.
- Added authentication, device-registration, and telemetry examples.
- Added `operationId` values to documented operations for client generation.

### Corrected

- Clarified that telemetry `to` is an exclusive boundary.
- Documented `409` behavior for duplicate device registration.
- Documented `204 No Content` as the successful device-deactivation response.

### Compatibility notes

- The fictional 2.1.0 sample is backward compatible with v2 clients.
- No request field was removed or renamed.
- Clients should handle structured `error.code` values instead of parsing error messages.

See the full [v2.1.0 release notes](https://github.com/Nilesh21-gunjal/Technical-Writing-Portfolio/blob/Main/samples/release-notes/Device%20Operations%20API%20v2.1.0%20Release%20Notes.md).
