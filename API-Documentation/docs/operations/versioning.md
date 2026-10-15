# Versioning and deprecation policy

The current OpenAPI document identifies the sample as version `2.1.0` and uses `/v2` in its fictional server URL. The policy on this page is a **proposed portfolio design policy**. It is not a claim about a live API or a service-level commitment.

## Versioning approach

- Use a major version in the URL, such as `/v2`, for breaking API changes.
- Use the OpenAPI `info.version` value to identify the documented release within that major version.
- Add fields, enum values, optional query parameters, and new endpoints only when existing client behavior remains compatible.
- Document breaking changes in the changelog and migration guidance before releasing a new major version.

## Deprecation approach

For a future deprecation, the documentation should:

1. Mark the affected endpoint, field, or behavior as deprecated in OpenAPI and in human-written guidance.
2. Name the replacement and provide a migration example.
3. State the announced removal date, if a real service has approved one.
4. Keep the old reference available until the published removal date.
5. Remove the deprecated behavior only in a new major version unless an approved security or legal exception requires different handling.

This sample does not declare any endpoint or field as deprecated.

## Related information

- [Changelog](changelog.md)
- [Documentation decisions](../design-decisions.md)
