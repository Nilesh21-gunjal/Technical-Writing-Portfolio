# Frequently asked questions

## Is this a production API?

No. This is a fictional, public-safe portfolio sample. Its identifiers, URLs, credentials, payloads, and operational values are invented.

## Can I send a request to the production-style URL?

No. The `https://api.portfolio-example.invalid/v2` URL is intentionally non-routable. Use the local Prism mock at `http://127.0.0.1:4010` to run the examples.

## Does the local mock create real devices?

No. The local mock returns documented examples. It does not persist registrations, validate credentials, or simulate production behavior.

## Which fields can I update after registration?

Update only `name` and `status`. The external ID, device type, site, manufacturer, model, and communication protocol are immutable after registration.

## Does the current contract support webhooks or event subscriptions?

No. The current OpenAPI contract has no webhook or event-subscription path. The documentation does not imply that an event-delivery capability exists.

## Where can I find request examples?

The repository contains validated [cURL, Python, and JavaScript examples](https://github.com/Nilesh21-gunjal/Technical-Writing-Portfolio/tree/Main/API-Documentation/examples) and a [Postman collection](https://github.com/Nilesh21-gunjal/Technical-Writing-Portfolio/tree/Main/API-Documentation/postman).
