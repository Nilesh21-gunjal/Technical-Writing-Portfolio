# Errors and troubleshooting

The API uses a consistent error envelope for documented client errors:

```json
{
  "error": {
    "code": "invalid_request",
    "message": "The value of per_page must be between 1 and 100.",
    "request_id": "req_01HXYZ123ABC"
  }
}
```

Use `error.code` for programmatic handling, `error.message` to correct the request, and `error.request_id` when you report a problem.

## Error codes

| Status | Error code | Cause | Fix |
|---:|---|---|---|
| `400` | `invalid_request` | The request is malformed or has invalid query parameters. | Correct the JSON or query value. For `per_page`, use a value from 1 through 100. |
| `401` | `invalid_client` | The client credentials for `POST /auth/token` are missing or invalid. | Send a valid `client_id` and `client_secret`. |
| `401` | `invalid_token` | A protected request has no token, an expired token, or an invalid token. | Request a token and send it as `Authorization: Bearer YOUR_ACCESS_TOKEN`. |
| `404` | `resource_not_found` | The requested device or alert does not exist or is not available to the caller. | Confirm the path ID and caller access before retrying. |
| `409` | `duplicate_external_id` | A device registration uses an existing `external_id`. | Use the existing device or choose a unique external ID. |
| `409` | `alert_already_resolved` | The alert already has a `resolved` status. | Do not retry the resolution request. Retrieve the alert if you need its final state. |
| `422` | `validation_failed` | The request is structurally valid but violates a documented business validation rule. | Read `error.message`, correct the field, and resend the request. |
| `429` | `rate_limit_exceeded` | The client has exceeded the allowed request rate. | Wait for the number of seconds in `Retry-After`, then retry the request. |

## Diagnose a failed request

1. Record the HTTP status, `error.code`, `error.message`, and `error.request_id`.
2. Confirm the request method, path, bearer token, and required parameters against the [interactive API reference](../reference/api-reference.md).
3. Correct the request before retrying. Do not repeatedly retry a `409` response without changing the request state.
4. For `429`, wait for `Retry-After`. For `401`, request a new token. For `404`, verify the API-assigned ID.

## Error-handling example

```javascript
const response = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });

if (!response.ok) {
  const body = await response.json();
  throw new Error(`${response.status} ${body.error.code}: ${body.error.message} (${body.error.request_id})`);
}
```

## Related information

- [Authentication](../get-started/authentication.md)
- [Rate limits](rate-limits.md)
- [Troubleshooting](../support/troubleshooting.md)
