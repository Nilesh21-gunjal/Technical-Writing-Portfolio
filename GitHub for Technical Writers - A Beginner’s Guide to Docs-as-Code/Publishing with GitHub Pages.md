# Publishing with GitHub Pages

## Overview

GitHub Pages publishes static HTML, CSS, JavaScript, and documentation files from a repository. It is useful for sharing a portfolio or a documentation preview.

## Prerequisites

- A GitHub repository containing the site files
- Permission to change the repository's Pages settings
- An `index.html` file in the selected publishing directory

## Publish a static site

1. Open the repository on GitHub.
2. Select **Settings**, then **Pages**.
3. Under **Build and deployment**, select **GitHub Actions** or a branch and folder containing the site.
4. Save the configuration.
5. Push a change to the configured branch.
6. Open the URL shown under **Visit site** after the deployment completes.

## Validate the published site

- Open the site in a private browser window.
- Test navigation from the landing page.
- Open images and stylesheet resources.
- Confirm that code blocks and API specifications render correctly.
- Check the deployment result in the repository's **Actions** tab.

## Common issue

If the page loads but an API specification does not, confirm that the page and YAML file are in the published directory and that the JavaScript uses a relative URL such as `./openapi.yaml`.

## Next topic

Continue to [Best Practices](./Best%20Practices.md).
