# Writing conventions

These conventions keep the sample consistent for developers and make its authoring decisions explicit.

## Write for a task

Use headings that describe a developer goal, such as **Register a device** or **Resolve an alert**. Start procedures with an imperative verb. State prerequisites, expected results, and recovery actions when they help a reader complete the task.

## Use active, direct language

Prefer active voice and short sentences. Address the reader as **you** when giving instructions. Explain behavior and constraints instead of restating field names.

| Prefer | Avoid |
|---|---|
| "Send the token in the `Authorization` header." | "The token should be sent in the `Authorization` header." |
| "Use `device_id` in child-resource paths." | "The `device_id` field is used for child-resource paths." |

## Use consistent terms

| Term | Meaning |
|---|---|
| **device** | A registered sensor, controller, or gateway resource. |
| **device ID** | API-assigned `id` in the `DEV-YYYY-NNNNNN` pattern. |
| **external ID** | Caller-supplied, immutable natural key. |
| **access token** | Short-lived token sent using the `Bearer` scheme. |
| **local mock** | Prism server that returns documented examples only. |

## Format API content predictably

- Put endpoint paths and field names in code font.
- Use RFC 3339 UTC timestamps with a `Z` suffix in examples.
- Present request examples before the matching success response.
- Use status code, stable error code, cause, and corrective action when documenting errors.
- Mark fictional or proposed behavior clearly rather than implying that it is production behavior.

## Apply the Microsoft style principles

The sample applies task-oriented headings, active voice, imperative procedures, meaningful link text, and clear expected results from the Microsoft Manual of Style supplied for this portfolio work. It does not reproduce the guide's proprietary content.
