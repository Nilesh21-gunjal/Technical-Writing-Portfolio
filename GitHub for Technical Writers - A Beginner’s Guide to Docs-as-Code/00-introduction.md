# Introduction to GitHub for Technical Writers

**Type:** Concept
**Audience:** Technical writers with no prior Git or GitHub experience
**Reading time:** 6 minutes

## What this guide covers

In this guide, you will author Markdown content, track changes with Git, collaborate through GitHub, and publish with GitHub Pages. No prior command-line or version-control experience is required.

Each topic in this guide stands on its own. Read them in order if you're new to Git, or jump to the topic that matches your current task.

## Why technical writers use GitHub

Software teams often store documentation in the same repositories as their code, or in adjacent repositories that use the same workflow. This model is called **Docs-as-Code**. Writers author plain-text content, usually Markdown or reStructuredText, and manage it with the same version-control workflow used for source code.

This shift changes what's expected of a technical writer. Teams that adopt Docs-as-Code expect writers to:

- Submit changes through pull requests instead of emailing drafts.
- Track revisions with commit history instead of "final_v3_reviewed.docx" file names.
- Review and comment on peers' content using inline diffs.
- Publish documentation through the same CI/CD pipeline that ships the product.

A writer in this workflow can create a branch, update the content, run checks, and open a pull request without waiting for a developer to convert the files.

## Core concepts

### Repository

A repository (or "repo") is a project's file storage, including its full history. A documentation repository typically contains Markdown files, image assets, and configuration files that control how the content is built or published.

### Commit

A commit records a set of staged changes with a message describing what changed and why. The commit history shows who changed the document and when.

### Branch

A branch is an isolated line of development. Writers create a branch to draft or revise content without affecting the published version. Once the work is reviewed and approved, the branch is merged into the main branch.

### Pull request (PR)

A pull request proposes merging one branch into another. It's the review checkpoint: reviewers comment on specific lines, request changes, and approve before the content ships. PRs replace the "track changes and email" review cycle with a structured, auditable one.

### Markdown

Markdown is a lightweight markup language that uses plain-text syntax (`#` for headings, `**bold**` for emphasis, `` ``` `` for code blocks) to produce structured, styled documents. It's the default authoring format for Docs-as-Code because it's readable as raw text, diffs cleanly in version control, and renders consistently across platforms like GitHub, static site generators, and most documentation portals.

## How this differs from traditional documentation tools

| Traditional CMS/DOCX workflow | Docs-as-Code workflow |
|---|---|
| File stored on a shared drive or CMS | File stored in a Git repository |
| Track Changes for review | Pull request with inline comments |
| Manual versioning (v1, v2, final) | Automatic version history via commits |
| Publish via CMS export or manual upload | Publish via automated build (CI/CD) |
| Review happens over email or chat | Review happens in the PR interface |
| Single source of truth is a file | Single source of truth is the repository |

Docs-as-Code suits teams that already build software this way and want documentation to follow the same review and release workflow. A different publishing model may suit long-form print deliverables, heavily designed marketing collateral, or content maintained by stakeholders who will not adopt Git.

## What you'll build in this guide

By the end of this guide, you will have:

1. A GitHub account and a working understanding of its interface.
2. A repository containing Markdown-based documentation.
3. Experience with the core Git commands writers use day to day.
4. A completed pull request, reviewed and merged.
5. A published documentation site, live on GitHub Pages.

## Next topic

Continue to [Getting Started with GitHub](./Getting%20Started.md) to create your account and configure your environment.
