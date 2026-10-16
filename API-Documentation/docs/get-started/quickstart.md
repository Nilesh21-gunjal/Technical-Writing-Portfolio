# Quickstart: make your first API call in 5 minutes

Use the local Prism mock to request a sample access token and list devices. Complete this task without a real account; the mock returns the examples defined in the OpenAPI file.

## Before you begin

- Install Node.js 24 or later and pnpm.
- Clone the portfolio repository.
- Use two terminal windows from the repository root.

## Start the local mock

In the first terminal, install the project dependencies and start Prism:

```bash
pnpm install --frozen-lockfile
pnpm mock
```

The mock listens on `http://127.0.0.1:4010`. Keep this terminal running.

> Note: The mock is a documentation aid. It returns example responses, does not validate the demo credentials, and does not retain device changes.

## Request an access token

In the second terminal, send a `POST /auth/token` request:

```bash
curl --request POST "http://127.0.0.1:4010/auth/token" \
  --header "Content-Type: application/json" \
  --data '{"client_id":"demo-client","client_secret":"demo-secret"}'
```

The response includes an `access_token`, a `token_type` of `Bearer`, and an `expires_in` value of `3600` seconds in this sample.

## List devices

Send the returned token in the `Authorization` header:

```bash
curl --request GET "http://127.0.0.1:4010/devices?page=1&per_page=20" \
  --header "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.demo-token" \
  --header "Accept: application/json"
```

The example response contains a `data` array and a `pagination` object. The device records are ordered by `created_at` in ascending order, with the device ID used as a tie-breaker.

## Use Python or JavaScript

Use the same request in your preferred language. These examples use only the local mock URL and fictional bearer token.

=== "Python"

    ```python
    import requests

    response = requests.get(
        "http://127.0.0.1:4010/devices",
        headers={"Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.demo-token"},
        params={"page": 1, "per_page": 20},
        timeout=30,
    )
    response.raise_for_status()
    print(response.json())
    ```

=== "JavaScript"

    ```javascript
    const response = await fetch("http://127.0.0.1:4010/devices?page=1&per_page=20", {
      headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.demo-token" }
    });

    if (!response.ok) throw new Error(`Request failed: ${response.status}`);
    console.log(await response.json());
    ```

The repository includes tested source files for [Python](https://github.com/Nilesh21-gunjal/Technical-Writing-Portfolio/blob/Main/API-Documentation/examples/python/list_devices.py), [JavaScript](https://github.com/Nilesh21-gunjal/Technical-Writing-Portfolio/blob/Main/API-Documentation/examples/javascript/list-devices.mjs), and [cURL](https://github.com/Nilesh21-gunjal/Technical-Writing-Portfolio/blob/Main/API-Documentation/examples/curl/list-devices.sh).

To run all published examples against the local mock, use:

```bash
pnpm test:examples
```

## Next steps

- Read [Authentication](authentication.md) before using a bearer token in an application.
- [Register a device](../guides/register-device.md) to see the required request fields.
- Open the [interactive API reference](../reference/api-reference.md) for endpoint and schema details.
