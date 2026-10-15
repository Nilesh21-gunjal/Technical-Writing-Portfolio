# Glossary

| Term | Definition |
|---|---|
| access token | A short-lived credential returned by `POST /auth/token` and sent with the `Bearer` scheme. |
| alert | A device condition with an `open`, `acknowledged`, or `resolved` status. |
| API-assigned ID | A stable identifier created by the API, such as a device ID or alert ID. |
| device | A registered sensor, controller, or gateway. |
| external ID | A caller-supplied natural key that is unique and immutable after device registration. |
| local mock | The Prism server that returns OpenAPI examples without persisting changes or validating credentials. |
| metric | The name of a measured quantity, such as `temperature` or `energy`. |
| pagination | Page-based navigation through a collection response. |
| request ID | A correlation identifier returned in an error envelope. |
| telemetry point | One time-stamped device measurement with a metric, numeric value, and unit. |
| usage summary | An aggregate for one metric over one selected time range. |
