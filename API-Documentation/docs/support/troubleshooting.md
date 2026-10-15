# Troubleshooting

## I receive `401 invalid_token`

Request a new token from `POST /auth/token` and send it in the `Authorization` header using the `Bearer` scheme. Do not place the token in the URL.

## I receive `409 duplicate_external_id`

The `external_id` is already registered. Retrieve the existing device or use a different external ID. Do not retry the same registration unchanged.

## I receive `422 validation_failed`

Read `error.message` to identify the field or business rule that failed. Confirm the documented field format, enum values, and mutable-field restrictions in the [API reference](../reference/api-reference.md), then resend a corrected request.

## I receive no telemetry from the local mock

The local mock returns a static documented example. Confirm that you are using the exact example path, required `from` and `to` timestamps, and example device ID. The mock does not contain a live device data store.

## I receive `429 rate_limit_exceeded`

Read `Retry-After`, wait for the specified number of seconds, and retry once. The sample does not define a numeric rate policy; do not invent one when you implement a client.

## I cannot see the interactive API reference

Enable JavaScript or open the [OpenAPI YAML](https://github.com/Nilesh21-gunjal/Technical-Writing-Portfolio/blob/Main/API-Documentation/openapi.yaml) directly. The portal includes a non-JavaScript fallback link on the reference page.

## Need a different answer?

Use the response `request_id` when describing an API error. For this portfolio sample, review the [source repository](https://github.com/Nilesh21-gunjal/Technical-Writing-Portfolio) and [contact Nilesh Gunjal](mailto:nileshgunjal92@gmail.com).
