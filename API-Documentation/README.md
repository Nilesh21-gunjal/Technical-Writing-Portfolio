# Device Operations API, Portfolio Sample

**Nilesh Gunjal · Senior Technical Writer · OpenAPI 3.0.3 · Docs-as-Code**

[Documentation portal](https://nilesh21-gunjal.github.io/Technical-Writing-Portfolio/API-Documentation/) · [OpenAPI source](./openapi.yaml) · [Portfolio](https://nilesh21-gunjal.github.io/Technical-Writing-Portfolio/) · [LinkedIn](https://linkedin.com/in/nilesh-gunjal-39b8a376)

## About this sample

I built this independent, fictional developer documentation set for a connected-device REST API. All names, domains, identifiers, timestamps, credentials, and operational values are invented for portfolio use. The API is not connected to a production service and contains no employer or customer information.

## What to review

| Evidence | Included artifact |
|---|---|
| [Documentation portal](./docs/index.md) | Task-based onboarding, concepts, guides, tutorial, reference, and support content. |
| [`openapi.yaml`](./openapi.yaml) | Validated OpenAPI 3.0.3 contract with 10 operations across authentication, devices, telemetry, alerts, and usage. |
| [`examples/`](./examples/) | Copy-ready cURL, Python, and JavaScript requests tested against a local Prism mock. |
| [`postman/`](./postman/) | Postman collection and local-mock environment. |
| [`docs/design-decisions.md`](./docs/design-decisions.md) | Explicit decisions for public safety, errors, pagination, versioning, and quality gates. |

## Run locally

From the repository root, install the checked-in tooling and build the portal:

```bash
pnpm install --frozen-lockfile
python -m pip install -r requirements-docs.txt
pnpm build:api-docs
```

Start the local mock in one terminal:

```bash
pnpm mock
```

In another terminal, run the examples and contract checks:

```bash
pnpm test:api
```

## Validation

The documentation workflow validates the OpenAPI contract, lint rules, runnable examples, Postman collection, static-site build, links, and accessibility checks. The checks show how the repository protects the contract and its examples; they do not represent production API performance or adoption.

## Portfolio use

Before publishing a portfolio, check every example. Use fictional identifiers, example domains, and synthetic payloads. Do not copy internal URLs, customer names, architecture labels, credentials, logs, screenshots, or non-public operational rules into a public repository.

The Device Operations API does not model webhooks or event subscriptions. A separate [Refund API writing sample](./refund-api.md) is retained for an existing link and is not part of this API's contract or documentation set.

## Contact

- **Email:** [nileshgunjal92@gmail.com](mailto:nileshgunjal92@gmail.com)
- **LinkedIn:** [linkedin.com/in/nilesh-gunjal-39b8a376](https://linkedin.com/in/nilesh-gunjal-39b8a376)
