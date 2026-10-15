# Authenticate API requests

The Device Operations API uses bearer tokens for protected operations. Request a token from `POST /auth/token`, then send the token in the `Authorization` header for device, telemetry, alert, and usage requests.

## Request a token

Send `client_id` and `client_secret` in a JSON request body:

```bash
curl --request POST "http://127.0.0.1:4010/auth/token" \
  --header "Content-Type: application/json" \
  --data '{"client_id":"demo-client","client_secret":"demo-secret"}'
```

Successful responses contain these fields:

| Field | Description |
|---|---|
| `access_token` | Short-lived token for protected requests. |
| `token_type` | Always `Bearer` in this sample. |
| `expires_in` | Token lifetime in seconds. The documented sample response is `3600`. |

## Send the token

Include the token in the HTTP `Authorization` header:

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

For example:

```bash
curl --request GET "http://127.0.0.1:4010/devices" \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  --header "Accept: application/json"
```

## Handle authentication failures

| Status | Error code | What to do |
|---:|---|---|
| `400` | `invalid_request` | Confirm that `client_id` and `client_secret` are present in the token request. |
| `401` | `invalid_client` | Confirm that the client credential pair is valid. |
| `401` | `invalid_token` | Request a new token and send it with the `Bearer` scheme. |

Do not put a client secret or bearer token in source code, a repository, a browser URL, or a portfolio sample. Use a secret manager or environment variables in a real integration.

## Related information

- [Quickstart](quickstart.md)
- [Errors and troubleshooting](../operations/errors.md)
- [Interactive API reference](../reference/api-reference.md)
