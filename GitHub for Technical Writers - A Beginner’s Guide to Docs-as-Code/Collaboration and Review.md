# Collaboration and Review

## Overview

One of the most significant advantages of managing documentation on GitHub is the structured collaboration workflow it enables. Instead of sharing files over email, tracking feedback in comments, or reconciling multiple versions manually, GitHub provides a built-in review process - centred around **pull requests** - that mirrors how professional development teams collaborate on code.

This section covers how to create and work with pull requests, how to give and respond to feedback, and how to merge approved changes into your main documentation branch.

---

## Understanding the Collaboration Workflow

Before diving into individual steps, it helps to see how the full collaboration cycle fits together.

```
Create a branch  →  Make changes  →  Push branch  →  Open pull request  →  Review & feedback  →  Merge
```

| Stage | Who Acts | What Happens |
|---|---|---|
| **Create a branch** | Writer | A separate branch is created for the new content or update |
| **Make and commit changes** | Writer | Content is written, staged, and committed locally |
| **Push branch to GitHub** | Writer | The branch and its commits are uploaded to the remote repository |
| **Open a pull request** | Writer | A formal request to merge the branch into `main` is submitted for review |
| **Review and feedback** | Reviewer | Collaborators read the changes, leave comments, and request edits if needed |
| **Approve and merge** | Reviewer or Writer | Once approved, the changes are merged into the main branch |

> **Note:** In smaller teams, the writer and reviewer may be the same person working asynchronously. In larger teams, pull requests are reviewed by subject matter experts, editors, or developers before merging.

---

## What Is a Pull Request?

A pull request (commonly abbreviated as *PR*) is a GitHub feature that allows you to propose changes from one branch and request that they be reviewed and merged into another typically the `main` branch.

Pull requests are the primary collaboration mechanism in a Docs-as-Code workflow. They provide:

- A **clear record** of what changed, why it changed, and who approved it.
- A **structured review process** with inline comments, suggestions, and approvals.
- A **safe gate** that prevents unreviewed changes from reaching the published documentation.

> **Note:** In GitLab, the equivalent feature is called a **merge request**. The process and purpose are identical - only the terminology differs.

---

## Creating a Pull Request

Before creating a pull request, ensure you have:

- Created a branch for your changes (see [Git Basics for Writers](./Git%20Basics%20for%20Writers.md#working-with-branches))
- Committed all your changes to that branch
- Pushed the branch to GitHub.

### Steps to Create a Pull Request

1. Go to your repository on [github.com](https://github.com) and sign in.

2. GitHub will display a banner at the top of the repository page indicating that your recently pushed branch is ready. Click **Compare & pull request**.

   > **Note:** If the banner is not visible, select the **Pull requests** tab, then click **New pull request**. Use the **compare** dropdown to select your branch.

   ![Compare and pull request banner on the GitHub repository page](./Images/Pull%20Request.png)

3. On the pull request form, complete the following fields:

   | Field | Guidance |
   |---|---|
   | **Title** | Write a concise, descriptive title that summarises the change (for example, `Add Git basics section with command reference`) |
   | **Description** | Explain what was changed, why it was changed, and any context the reviewer needs. Use Markdown to format clearly. |
   | **Reviewers** | Assign one or more collaborators to review the pull request |
   | **Labels** | Optionally add labels such as `documentation`, `in-review`, or `needs-edit` to help categorise the PR |

   > 💡 **Tip:** A well-written pull request description reduces the back-and-forth during review. Include links to related issues or tickets, note any decisions you made during drafting, and flag anything you are uncertain about.

   ![Pull request form showing title, description, and reviewer fields](./Images/Files%20changed%20tab.png)

4. Confirm that the **base** branch is set to `main` and the **compare** branch is set to your working branch.

5. Click **Create pull request**.

   GitHub creates the pull request and notifies any assigned reviewers.

---

## Writing an Effective Pull Request Description

The pull request description is part of your documentation's permanent record. A vague description creates confusion during review and makes the commit history harder to audit later.

Use the following structure as a starting point:

```markdown
## Summary
Brief description of what this PR adds or changes.

## What Changed
- Added step-by-step instructions for creating a pull request
- Updated the collaboration workflow diagram
- Fixed broken cross-reference links in Section 3

## Reason for Change
Explain why this update was needed — for example, content gap identified, 
product update, or reviewer feedback from a previous PR.

## Review Notes
Call out anything the reviewer should pay particular attention to, 
or any areas where you would like specific feedback.
```

> **Tip:** Many teams use a pull request template stored in the repository so that all contributors follow the same format. If your team has one, it will appear automatically when you open a new pull request.

---

## Reviewing a Pull Request

When you are assigned as a reviewer, your role is to read the proposed changes carefully and provide clear, constructive feedback before the content is merged.

### Accessing the Pull Request

1. Select the **Pull requests** tab in the repository.
2. Click the pull request you have been assigned to review.
3. Select the **Files changed** tab to see a line-by-line comparison of what was added, modified, or removed.

   - Lines highlighted in **green** indicate additions.
   - Lines highlighted in **red** indicate deletions.

   ![Files changed tab showing a diff view with additions in green and deletions in red](./Images/Files%20changed%20tab.png)

### Leaving Inline Comments

1. In the **Files changed** view, hover over any line you want to comment on.
2. Click the **blue plus icon** (`+`) that appears to the left of the line.
3. Type your comment in the text box that appears.
4. Choose how to submit your comment:

   | Option | When to Use |
   |---|---|
   | **Add single comment** | For an isolated observation that does not require a response before you finish your review |
   | **Start a review** | When you have multiple comments to leave — this batches them and submits them together at the end |

   > **Tip:** Use **Start a review** rather than adding individual comments one by one. This prevents the author from receiving a separate notification for every comment and keeps the review thread organised.

### Suggesting Specific Edits

GitHub allows reviewers to propose exact wording changes directly within the pull request. The author can accept suggestions with a single click, which applies the change as a commit.

1. In the **Files changed** view, click the **+** icon on the line you want to edit.
2. In the comment box, click the **Insert a suggestion** icon (a document icon with a `+`).
3. Edit the text within the suggestion block that appears.
4. Click **Add single comment** or **Start a review**.

   **Example suggestion block in Markdown:**

   ````markdown
   ```suggestion
   Cloning creates a local copy of the repository on your computer.
   ```
   ````

   > **Tip:** Use suggestions for specific, small edits — correcting a typo, rewording a sentence, or fixing a formatting inconsistency. For larger structural feedback, use a regular comment to explain your reasoning.

### Submitting Your Review

Once you have finished reviewing all the changed files:

1. Click **Review changes** in the upper-right corner of the **Files changed** tab.
2. Write an optional summary comment for your overall review.
3. Select one of the following options:

   | Option | When to Use |
   |---|---|
   | **Comment** | You have observations or questions but are not yet ready to approve or block the merge |
   | **Approve** | The content meets the required standard and is ready to merge |
   | **Request changes** | Specific edits are required before the pull request can be approved |

4. Click **Submit review**.

   The pull request author receives a notification with your feedback.

---

## Responding to Review Feedback

When a reviewer requests changes, you address the feedback directly in your local branch and push the updates to the same pull request.

1. Read each comment carefully in the **Conversation** tab of the pull request.

2. Make the required edits in your local branch using your text editor.

3. Stage, commit, and push the changes:

   ```bash
   git add <filename>
   git commit -m "Address review feedback — revise pull request description guidance"
   git push
   ```

   The new commits appear automatically in the open pull request — no need to open a new one.

4. Reply to each comment in the pull request thread to let the reviewer know how you addressed their feedback. When an individual comment has been resolved, click **Resolve conversation** to mark it as complete.

   > **Tip:** Always respond to review comments, even if you have accepted the suggestion without changes. A brief acknowledgement — such as *"Updated as suggested"* or *"Revised to clarify the step sequence"* — keeps the review thread transparent and professional.

---

## Merging a Pull Request

Once all reviewers have approved the pull request and all conversations are resolved, the changes can be merged into the `main` branch.

### Merge Methods

GitHub offers three merge methods. The recommended method depends on your team's workflow:

| Merge Method | What It Does | When to Use |
|---|---|---|
| **Create a merge commit** | Preserves all commits from the branch and adds a merge commit | When you want a complete, detailed history of every change |
| **Squash and merge** | Combines all branch commits into a single commit on `main` | When the branch has many small or work-in-progress commits that do not need to appear individually in the history |
| **Rebase and merge** | Replays branch commits onto `main` without a merge commit | When you want a linear commit history without merge commits |

> **Tip:** For documentation repositories, **Squash and merge** is often the cleanest option. It keeps the `main` branch history readable — one commit per completed piece of work — without cluttering it with intermediate commits like `fix typo` or `another draft`.

### Steps to Merge

1. On the pull request page, confirm that all required reviews are approved and all conversations are resolved.

2. Click **Merge pull request**.

3. Edit the merge commit message if needed, then click **Confirm merge**.

   GitHub merges the branch into `main` and displays a confirmation banner.

4. Optionally, click **Delete branch** to remove the feature branch now that its changes have been incorporated.

   >  **Note:** Deleting a merged branch does not delete the commit history. The changes remain permanently recorded in the `main` branch history.

---

## Quick Reference — Collaboration Workflow

| Task | Where to Act |
|---|---|
| Create a pull request | Repository page → **Pull requests** → **New pull request** |
| Assign reviewers | Pull request form → **Reviewers** field |
| View file changes in a PR | Pull request → **Files changed** tab |
| Leave an inline comment | **Files changed** → hover line → click **+** |
| Suggest a specific edit | **Files changed** → click **+** → **Insert a suggestion** |
| Submit a review | **Files changed** → **Review changes** → select outcome → **Submit review** |
| Respond to feedback | Make local edits → commit → push to same branch |
| Merge approved changes | Pull request page → **Merge pull request** → **Confirm merge** |

---

