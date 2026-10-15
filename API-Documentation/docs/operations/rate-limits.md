# Handle rate limits

The OpenAPI contract documents `429 Too Many Requests` as the response when a client exceeds the request rate. It does not define a numeric limit, time window, or quota model for this fictional portfolio sample.

## Read the response

When the API returns `429`, the response includes:

- `error.code`: `rate_limit_exceeded`
- `error.message`: a human-readable explanation
- `error.request_id`: a correlation value
- `Retry-After`: the number of seconds to wait before retrying

## Retry safely

1. Stop sending the same request.
2. Read the `Retry-After` header.
3. Wait for the specified number of seconds.
4. Retry the request once.
5. If the API returns `429` again, reduce request frequency and investigate the client behavior before continuing.

Do not assume a fixed rate limit from this portfolio sample. A real API should publish its limit, quota scope, retry behavior, and any endpoint-specific exceptions in a service-level policy.

## Related information

- [Errors and troubleshooting](errors.md)
- [Pagination and filtering](../concepts/pagination-and-filtering.md)
