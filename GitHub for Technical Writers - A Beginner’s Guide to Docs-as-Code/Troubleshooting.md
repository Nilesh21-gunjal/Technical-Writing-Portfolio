# Troubleshooting the Documentation Workflow

## Broken local link

**Symptom:** Selecting a link opens a 404 page.

**Resolution:** Check the relative path, filename spelling, spaces, capitalization, and heading anchor. Run a local link checker before opening a pull request.

## Image does not render

**Symptom:** The image placeholder appears instead of the screenshot.

**Resolution:** Confirm that the image is stored in the repository, that the path is relative to the Markdown file, and that the filename uses the correct capitalization and extension.

## GitHub Pages shows an old version

**Symptom:** The published site does not contain the latest commit.

**Resolution:** Check the deployment workflow, confirm that the configured branch contains the change, and review the latest GitHub Actions run before clearing the browser cache.

## Pull request has merge conflicts

**Symptom:** GitHub reports conflicts when a branch is opened or updated.

**Resolution:** Pull the target branch locally, resolve the conflicts in the affected files, preview the documentation, and push the resolved branch.

## API specification does not load

**Symptom:** Swagger UI displays an error instead of the API reference.

**Resolution:** Confirm that the YAML file is valid, that the browser can fetch the relative URL, and that the page is being served over HTTP rather than opened directly from the file system.

## Next topic

Continue to [Additional Resources](./Additional%20Resources.md).
