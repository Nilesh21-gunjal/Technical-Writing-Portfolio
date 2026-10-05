# Introduction to GitHub for Technical Writers

**Type:** Concept
**Audience:** Technical writers with no prior Git or GitHub experience
**Reading time:** 6 minutes

## What this guide covers

This guide teaches technical writers how to work in a Docs-as-Code environment: authoring content in Markdown, tracking changes with Git, collaborating through GitHub, and publishing with GitHub Pages. It assumes no prior command-line or version-control experience.

Each topic in this guide stands on its own. Read them in order if you're new to Git, or jump to the topic that matches your current task.

## Why technical writers use GitHub

Software teams increasingly store documentation in the same repositories as their code, or in adjacent repositories that follow the same workflow. This model is called **Docs-as-Code**. Instead of writing in a standalone CMS or word processor, writers author content in plain-text formats — usually Markdown or reStructuredText — and manage that content the same way developers manage source code.

This shift changes what's expected of a technical writer. Teams that adopt Docs-as-Code expect writers to:

- Submit changes through pull requests instead of emailing drafts.
- Track revisions with commit history instead of "final_v3_reviewed.docx" file names.
- Review and comment on peers' content using inline diffs.
- Publish documentation through the same CI/CD pipeline that ships the product.

Writers who can operate in this environment integrate directly into engineering workflows. They don't wait for a developer to "convert" their content — they open a pull request themselves.

## Core concepts

### Repository

A repository (or "repo") is a project's file storage, including its full history. A documentation repository typically contains Markdown files, image assets, and configuration files that control how the content is built or published.

### Commit

A commit is a saved snapshot of changes, paired with a message describing what changed and why. Commits form the audit trail for a document's evolution — who changed what, and when.

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

Neither model is universally "better." Docs-as-Code suits teams that already build software this way and want documentation to move at the same pace and under the same rigor as code. It's less suited to teams producing long-form print deliverables, heavily designed marketing collateral, or content maintained by non-technical stakeholders who won't adopt Git.

## What you'll build in this guide

By the end of this guide, you'll have:

1. A GitHub account and a working understanding of its interface.
2. A repository containing Markdown-based documentation.
3. Experience with the core Git commands writers use day to day.
4. A completed pull request, reviewed and merged.
5. A published documentation site, live on GitHub Pages.

## Next topic

Continue to [Getting Started with GitHub](./Getting%20Started.md) to create your account and configure your environment.
