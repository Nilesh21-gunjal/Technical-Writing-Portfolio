# Device Operations API

This fictional, public-safe API documentation sample shows how I organize a developer experience around onboarding, concepts, task guidance, reference, examples, validation, and support. The API models connected-device registration, lifecycle, telemetry, alerts, and usage reporting.

<div class="portfolio-note" markdown>

**Portfolio boundary.** All names, URLs, identifiers, timestamps, credentials, and operational values are invented for this sample. The API is not connected to a production service. The local mock returns documented examples; it does not persist data, validate credentials, or simulate production behavior.

</div>

[Start the quickstart](get-started/quickstart.md){ .md-button .md-button--primary }
[Open the API reference](reference/api-reference.md){ .md-button }

## What you can review

- A validated OpenAPI 3.0.3 contract with 10 documented operations across five resource areas.
- Human-written onboarding, concepts, task guides, a tutorial, and troubleshooting content alongside generated reference.
- Copy-ready cURL, Python, and JavaScript examples, plus a Postman collection and a local Prism mock.
- Explicit documentation decisions for versioning, errors, pagination, sample safety, and docs-as-code quality checks.

## Start with a developer goal

| Goal | Start here |
|---|---|
| Make a first safe request | [Quickstart](get-started/quickstart.md) |
| Obtain and use a bearer token | [Authentication](get-started/authentication.md) |
| Understand device data and lifecycle | [Device model and lifecycle](concepts/device-model.md) |
| Register or maintain a device | [Device guides](guides/register-device.md) |
| Read endpoint details and schemas | [Interactive API reference](reference/api-reference.md) |
| Diagnose a failed request | [Errors and troubleshooting](operations/errors.md) |

## Documentation architecture

The portal separates material by reader need:

- **Get started** helps a new developer make a first request.
- **Concepts** explain the resource model before the reader chooses an endpoint.
- **Guides and the tutorial** support a concrete integration task.
- **Reference** is generated from the OpenAPI contract and is paired with human-written operational guidance.
- **Support** explains terms, common questions, and recovery steps.

## Source and validation

The [OpenAPI source](https://github.com/Nilesh21-gunjal/Technical-Writing-Portfolio/blob/Main/API-Documentation/openapi.yaml), [runnable examples](https://github.com/Nilesh21-gunjal/Technical-Writing-Portfolio/tree/Main/API-Documentation/examples), and [Postman collection](https://github.com/Nilesh21-gunjal/Technical-Writing-Portfolio/tree/Main/API-Documentation/postman) are available in the portfolio repository. The project validates the contract, examples, links, and generated site in continuous integration.

For the documentation rationale, see [Documentation decisions](design-decisions.md). For terminology and writing rules, see [Writing conventions](style-guide.md).
