# Git Basics for Writers

## Overview

Now that you have a GitHub account and a repository set up, the next step is to understand the Git commands that form the core of a Docs-as-Code workflow. Git is the version control system that powers GitHub. While GitHub provides the interface to host and collaborate on your documentation, Git is what tracks every change you make locally and synchronises it with the remote repository.

This section covers the essential Git commands that technical writers use on a daily basis — from checking the status of your files to committing changes and pushing them to GitHub.

---

## The Git Documentation Workflow

Every documentation update follows the same repeatable sequence in Git. Understanding this cycle before learning individual commands makes each command easier to place in context.

```
Edit files  →  Stage changes  →  Commit changes  →  Push to GitHub
```

| Stage | What Happens | Git Command |
|---|---|---|
| **Edit** | You create or update documentation files locally | *(No command - work in your editor)* |
| **Stage** | You select which changes to include in the next commit | `git add` |
| **Commit** | You save a snapshot of the staged changes with a message | `git commit` |
| **Push** | You upload the committed changes to GitHub | `git push` |

>  **Note:** Git operates locally until you push. Your changes are not visible on GitHub until you complete the push step.

---

## Essential Git Commands

### Checking Repository Status

Before making any changes, it is good practice to check the current state of your repository. This tells you which files have been modified, which are staged for commit, and whether your local branch is in sync with GitHub.

```bash
git status
```

**Example output:**

```
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  modified:   Git Basics for Writers.md

Untracked files:
  images/git-workflow.png
```

| Output Term | Meaning |
|---|---|
| `modified` | A tracked file has been changed but not yet staged |
| `Untracked files` | New files that Git is not yet tracking |
| `staged` | Changes that are ready to be committed |

>  **Tip:** Run `git status` before and after every command when you are learning. It gives you a clear picture of exactly what Git is doing at each stage.

---

### Staging Changes

Staging allows you to control precisely which changes are included in your next commit. You can stage a single file, multiple files, or all changes at once.

**Stage a specific file:**

```bash
git add <filename>
```

**Example:**

```bash
git add "Git Basics for Writers.md"
```

**Stage all changed files at once:**

```bash
git add .
```

>  **Warning:** Using `git add .` stages every changed and untracked file in the repository. Review `git status` first to confirm you are not accidentally staging files you did not intend to include - such as system files, editor configuration files, or draft content.

---

### Committing Changes

A commit saves a permanent snapshot of your staged changes to the repository's history. Every commit requires a message that describes what was changed and why.

```bash
git commit -m "Your commit message here"
```

**Example:**

```bash
git commit -m "Add Git basics section with command reference table"
```

**Writing effective commit messages**

Commit messages are part of your documentation's audit trail. A clear, consistent commit history makes it easier for collaborators to understand the evolution of your content.

| ✅ Good Commit Message | ❌ Poor Commit Message |
|---|---|
| `Add troubleshooting section for clone errors` | `updates` |
| `Fix broken image path in repository setup guide` | `fix stuff` |
| `Update prerequisites - remove Python requirement` | `edited file` |
| `Revise Git workflow diagram alt text for accessibility` | `changes` |

>  **Tip:** Write commit messages in the imperative mood - *"Add section"* rather than *"Added section"* or *"Adding section"*. This is the standard convention used by most development teams and aligns with Git's own commit message style.

---

### Pushing Changes to GitHub

Once you have committed your changes locally, push them to the remote repository on GitHub to make them visible to collaborators.

```bash
git push
```

If you are pushing a branch for the first time, you need to set the upstream reference:

```bash
git push -u origin <branch-name>
```

**Example:**

```bash
git push -u origin main
```

For subsequent pushes on the same branch, `git push` alone is sufficient.

>  **Note:** `origin` is the default name Git assigns to the remote repository you cloned from. It refers to the repository URL on GitHub.

---

### Pulling Updates from GitHub

If you are collaborating with others, the remote repository may have changes that are not yet on your local machine. Always pull the latest changes before starting new work to avoid conflicts.

```bash
git pull
```

This fetches the latest changes from GitHub and merges them into your current local branch.

>  **Warning:** If you have uncommitted local changes when you run `git pull`, Git may report a conflict. To avoid this, always commit or stash your local changes before pulling. See [Troubleshooting](./Troubleshooting.md) for guidance on resolving merge conflicts.

---

### Viewing Commit History

To review the history of changes made to a repository, use the log command:

```bash
git log
```

**Example output:**

```
commit 4f3a2b1c...
Author: Nilesh Gunjal <nilesh@example.com>
Date:   Mon Apr 28 2026

    Add Git basics section with command reference table

commit 9d8e7f6a...
Author: Nilesh Gunjal <nilesh@example.com>
Date:   Sun Apr 27 2026

    Update repository setup - add HTTPS vs SSH comparison table
```

For a more compact view, use:

```bash
git log --oneline
```

**Example output:**

```
4f3a2b1 Add Git basics section with command reference table
9d8e7f6 Update repository setup - add HTTPS vs SSH comparison table
1c2d3e4 Initial commit - add README and introduction
```

>  **Tip:** `git log --oneline` is particularly useful when reviewing a long commit history or preparing a summary of recent changes for a stakeholder update.

---

## Working with Branches

Branches allow you to work on new content or updates without affecting the main published version of your documentation. When your changes are reviewed and approved, the branch is merged back into the main branch.

### Why Branches Matter for Technical Writers

- You can draft and revise content without risking the stability of the live documentation.
- Reviewers can see exactly what has changed before it is published.
- Multiple writers can work on different topics simultaneously without overwriting each other's work.

### Creating and Switching to a New Branch

```bash
git checkout -b <branch-name>
```

**Example:**

```bash
git checkout -b update-git-basics-section
```

>  **Tip:** Name branches after the specific task or topic you are working on (for example, `add-troubleshooting-section` or `fix-image-paths`). Avoid generic names like `updates` or `my-branch`.

### Checking Which Branch You Are On

```bash
git branch
```

The active branch is marked with an asterisk (`*`):

```
* update-git-basics-section
  main
```

### Switching Between Branches

```bash
git checkout <branch-name>
```

**Example:**

```bash
git checkout main
```

>  **Warning:** Switch branches only when your current work is committed or stashed. Unsaved changes can carry over between branches and cause unintended edits in the wrong place.

---

## Quick Reference — Essential Git Commands

| Command | Purpose |
|---|---|
| `git status` | Check the current state of your working directory |
| `git add <filename>` | Stage a specific file for commit |
| `git add .` | Stage all changed and untracked files |
| `git commit -m "message"` | Save staged changes with a descriptive message |
| `git push` | Upload committed changes to GitHub |
| `git push -u origin <branch>` | Push a new branch and set the upstream reference |
| `git pull` | Download and merge the latest changes from GitHub |
| `git log` | View the full commit history |
| `git log --oneline` | View a compact one-line commit history |
| `git checkout -b <branch>` | Create and switch to a new branch |
| `git checkout <branch>` | Switch to an existing branch |
| `git branch` | List all local branches |


