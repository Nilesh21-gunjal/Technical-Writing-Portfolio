# Contributing to the portfolio

This repository is a public technical-writing portfolio. Treat every contribution as publishable content.

## Keep samples public-safe

- Use fictional names, domains, identifiers, credentials, timestamps, and operational values.
- Do not add employer-owned content, customer data, internal URLs, screenshots, logs, credentials, or unreleased information.
- Keep the Device Operations API and the separate Refund API writing sample clearly distinct.

## Make a documentation change

1. Create a focused branch.
2. Update the OpenAPI contract before changing generated reference claims.
3. Add or update a task guide, example, or support page when a developer workflow changes.
4. Run the checks below before opening a pull request.

## Run checks locally

```bash
pnpm install --frozen-lockfile
python -m pip install -r requirements-docs.txt
pnpm validate:openapi
pnpm lint:openapi
pnpm lint:spectral
pnpm test:api
pnpm build:api-docs
pnpm build:site
node .github/scripts/check-accessibility.mjs
node .github/scripts/check-accessibility.mjs site
```

To check the responsive layouts, start a local preview in one terminal and run the browser check in another:

```bash
python -m http.server 4173 --directory site
pnpm test:responsive
```

## Review checklist

- The change has a clear audience and task or reference purpose.
- Examples match the OpenAPI contract and remain safe to publish.
- Links, headings, and alt text pass automated checks.
- The static API portal builds with `--strict`.
- The pull request describes scope, validation, and any follow-up work.
