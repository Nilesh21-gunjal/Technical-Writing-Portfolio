# Device Operations API — Portfolio Sample

**Nilesh Gunjal · Senior Technical Writer · OpenAPI 3.0 · Docs-as-Code**

[LinkedIn](https://linkedin.com/in/nilesh-gunjal-39b8a376) · [Portfolio](https://github.com/Nilesh21-gunjal/Technical-Writing-Portfolio) · [API source directory](https://github.com/Nilesh21-gunjal/Technical-Writing-Portfolio/tree/Main/API-Documentation)

## About this sample

This independent, fictional portfolio sample demonstrates how a senior technical writer designs and documents a developer-facing REST API for connected-device operations. It is intentionally generic: all names, domains, identifiers, timestamps, and operational values are invented for portfolio use. The API is not connected to a production service and contains no employer or customer information.

## What this sample demonstrates

- OpenAPI 3.0.3 specification design
- Authentication and token acquisition
- Device registration and lifecycle management
- Query filtering, time ranges, pagination, and validation
- Telemetry, alerts, and aggregate usage resources
- Reusable schemas, parameters, and error responses
- Request and response examples that are safe to publish
- Interactive Swagger UI rendering
- Docs-as-Code organization suitable for review and maintenance

## Files

| File | Purpose |
|---|---|
| [`index.html`](./index.html) | Branded Swagger UI entry point |
| [`openapi.yaml`](./openapi.yaml) | Complete OpenAPI 3.0.3 specification |
| [`refund-api.md`](./refund-api.md) | Supplemental API-reference writing sample |

## Tools and standards

| Category | Tools or standards |
|---|---|
| Specification | OpenAPI 3.0.3, YAML |
| Rendering | Swagger UI 5 |
| Authoring | VS Code, Markdown, YAML |
| Workflow | Git, GitHub, pull-request review |
| API concepts | REST, HTTP, JSON, bearer authentication, webhooks |

## Run locally

From the repository root:

```bash
python -m http.server 8080 --directory API-Documentation
```

Open <http://localhost:8080> in a browser. Serving the folder over HTTP allows Swagger UI to load `openapi.yaml`; opening `index.html` directly with `file://` can be blocked by browser security rules.

## Publishing and portfolio safety

Review every example before publishing a portfolio. Use fictional identifiers, example domains, and synthetic payloads. Do not copy internal URLs, customer names, architecture labels, credentials, logs, screenshots, or non-public operational rules into a public repository.

The source repository is [Technical-Writing-Portfolio](https://github.com/Nilesh21-gunjal/Technical-Writing-Portfolio). If GitHub Pages is enabled to publish the portfolio, verify the deployment in the repository's **Settings → Pages** area before sharing the URL.

## Contact

- **Email:** [nileshgunjal92@gmail.com](mailto:nileshgunjal92@gmail.com)
- **LinkedIn:** [linkedin.com/in/nilesh-gunjal-39b8a376](https://linkedin.com/in/nilesh-gunjal-39b8a376)
