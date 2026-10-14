# Responsible AI Documentation Workflow

> Independent portfolio sample. This workflow demonstrates how a technical writer can use generative AI as an assistive tool while keeping human accountability, source fidelity, privacy, security, accessibility, and traceability in the process.

## Purpose

Generative AI can help with outlining, rewriting, terminology suggestions, consistency checks, and draft analysis. It is not the source of truth for product behavior, safety instructions, API contracts, legal requirements, or security guidance.

The technical writer remains accountable for the published documentation. Every AI-assisted draft must be checked against approved source material and reviewed at the level required by its risk.

## Principles

| Principle | Documentation practice |
|---|---|
| **Human accountability** | A named writer and appropriate subject-matter expert approve the final content. AI output never receives automatic publication approval. |
| **Source fidelity** | Claims, procedures, examples, and API behavior are checked against approved requirements, product behavior, specifications, or test evidence. |
| **Data minimization** | Do not submit credentials, customer data, internal URLs, production identifiers, unreleased information, personal data, or employer-owned source content to an unapproved AI tool. |
| **Transparency** | Record where AI assistance materially influenced the draft and disclose it when the project or organization requires disclosure. |
| **Security awareness** | Review generated examples for prompt injection, insecure defaults, exposed secrets, unsafe commands, and misleading security claims. |
| **Accessibility and inclusion** | Check structure, language, headings, link text, image alternatives, tables, and interaction guidance for accessibility before publication. |
| **Traceability and reversibility** | Keep the approved source, review decisions, change history, and rollback path in the documentation repository. |

## Workflow

### 1. Classify the request and the data

Before using AI assistance, identify the documentation task, audience, risk, and data classification.

| Classification | AI-handling decision |
|---|---|
| **Public or synthetic** | May be used with an approved tool when the content is still reviewed for accuracy and safety. |
| **Internal but non-sensitive** | Use only an organization-approved tool and follow the team's retention and access rules. |
| **Confidential, personal, customer, credential, production, or unreleased data** | Do not paste into a general-purpose AI tool. Use an approved controlled workflow or work from sanitized abstractions. |

If the classification is unclear, pause and ask the data owner or security contact before continuing.

### 2. Define the evidence and acceptance criteria

Write down what the final documentation must prove. Examples include:

- A procedure includes prerequisites, ordered actions, expected results, and recovery guidance.
- An API example matches the approved schema, status code, authentication model, and validation rules.
- A release note identifies user impact, compatibility, migration action, and known limitations.
- A troubleshooting step is safe, reversible, and supported by an approved diagnostic source.

### 3. Use AI for bounded assistance

Use a narrow prompt with sanitized context and a specific output format. Suitable tasks include:

- Proposing an outline from writer-created headings.
- Suggesting alternate wording without changing technical meaning.
- Identifying repeated terms, inconsistent capitalization, or missing headings.
- Generating review questions from a requirements checklist.
- Converting an approved table into a draft checklist for human editing.

Do not ask AI to invent product behavior, fill missing requirements, approve a safety instruction, create credentials, or decide whether restricted data may be published.

### 4. Verify every material claim

Use a claim-to-source check for statements that affect user action or decision-making.

| Claim type | Required verification |
|---|---|
| Product behavior | Reproduce the behavior, inspect approved test evidence, or confirm with the responsible engineer. |
| API behavior | Validate against the OpenAPI specification, implementation behavior, examples, and error responses. |
| Safety or operational instruction | Confirm with the responsible engineer, safety owner, or approved manual. |
| Security or privacy statement | Confirm with the security or privacy owner and check for unsafe disclosure. |
| Legal, policy, or compliance statement | Obtain review from the appropriate policy or legal owner. |

Reject, rewrite, or escalate any generated content that cannot be supported by evidence.

### 5. Run human and technical review

The writer performs the first review for clarity, structure, terminology, audience fit, and unsupported claims. Subject-matter reviewers then validate the technical content. Higher-risk content receives additional security, privacy, safety, legal, or product review as applicable.

Record review decisions in the pull request, issue, review log, or project tracking system. A review comment such as “looks good” is not enough for a high-risk procedure; the evidence or decision should be clear.

### 6. Run quality and accessibility checks

Before publication, verify:

- Links, images, anchors, and navigation resolve correctly.
- Markdown, HTML, YAML, and OpenAPI files pass repository checks.
- Headings form a logical outline and tables have meaningful headers.
- Link text describes the destination and images have useful alternative text.
- Keyboard focus, color contrast, zoom behavior, and readable language are considered for web content.
- Code examples do not contain real credentials, personal data, private endpoints, or unsafe copy-and-paste commands.

### 7. Publish with provenance and a rollback path

Publish through the normal branch, pull-request, review, and release process. Preserve:

- The approved source or specification used for verification.
- The pull request and reviewer record.
- The AI-use disclosure required by the project.
- The release or commit identifier.
- The correction and rollback path if an issue is found.

### 8. Monitor and improve

After publication, review user feedback, reported defects, support questions, broken links, and changes in the product or source specification. Correct inaccurate or unsafe content quickly, record the decision, and update the workflow when recurring issues appear.

## Evidence artifacts

| Artifact | Purpose |
|---|---|
| Task and risk summary | Defines audience, intended use, data classification, and review level. |
| Source register | Lists the approved specifications, test evidence, manuals, or requirements used for verification. |
| Claim-to-source map | Shows how material claims are supported and identifies unresolved questions. |
| AI-use note | Records whether AI assisted with outline, wording, analysis, or review support without storing sensitive prompts. |
| Review record | Captures writer, SME, security, privacy, accessibility, or policy decisions as applicable. |
| Validation result | Records link, OpenAPI, build, accessibility, or example checks. |
| Change and correction log | Preserves release context, known limitations, corrections, and rollback decisions. |

## Example AI-use disclosure

> AI assistance was used to suggest an outline and identify possible terminology inconsistencies. The final content was rewritten and verified by the technical writer against approved source material. No confidential, personal, customer, production, or credential data was provided to the AI tool.

## Portfolio safety boundary

This sample describes a reusable documentation process. It does not claim that an employer adopted this exact workflow, used a particular AI vendor, or achieved a specific business result. Employer-specific tools, policies, metrics, prompts, and review records should be added only with written approval.

## Reference frameworks

- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- [NIST Generative AI Profile](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence)
- [OWASP GenAI Security Project and LLM Top 10](https://owasp.org/projects/top-10-for-large-language-model-applications)
- [W3C Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/)
