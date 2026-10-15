# Documentation decisions

This page makes the scope and reasoning of the portfolio sample reviewable. It describes documentation decisions for a fictional API, not behavior of a production service.

## Use an OpenAPI-first source of truth

The [OpenAPI 3.0.3 file](https://github.com/Nilesh21-gunjal/Technical-Writing-Portfolio/blob/Main/API-Documentation/openapi.yaml) is the reference source for paths, request and response shapes, error envelopes, examples, and schema constraints. The interactive reference renders from that contract. Human-written pages explain tasks and decisions that generated reference alone does not communicate well.

## Separate concepts, tasks, and reference

The information architecture follows three reader needs:

- Concepts explain the device model, telemetry, alerts, pagination, and filtering.
- Guides and the tutorial help a developer complete one goal at a time.
- Reference exposes exact endpoint and schema details without duplicating them in every guide.

## Make examples runnable and public-safe

The examples use the local Prism server at `http://127.0.0.1:4010`. They use fictional credentials and payloads. The mock returns documented example responses, so it cannot be used to prove production persistence, authorization, throughput, or error simulation.

## Use an explicit error envelope

Every documented client error uses an `error` object with `code`, `message`, and `request_id`. The stable code supports programmatic handling, the message supports troubleshooting, and the request ID offers a useful correlation value for support conversations.

## Define predictable collection behavior

The contract describes page-based navigation, limits `per_page` to 1 through 100, and documents result ordering where it matters. Telemetry and aggregate usage use inclusive `from` and exclusive `to` time boundaries to avoid overlap between adjacent ranges.

## Keep versioning and deprecation visible

The sample exposes version `2.1.0` in the OpenAPI `info` object and uses `/v2` in the fictional server URL. The [versioning and deprecation policy](operations/versioning.md) is clearly labeled as a portfolio design policy rather than a claim about a live service.

## Validate the documentation as code

The repository runs OpenAPI validation, Redocly linting, Spectral rules, runnable cURL/Python/JavaScript samples against Prism, Newman tests, static-site builds, link checks, and accessibility checks. These checks demonstrate a reviewable workflow; they do not claim production documentation performance.
