# Getting Started with GitHub

## Understanding GitHub Account Types

Before creating an account, it is helpful to understand the three types of GitHub accounts. This determines the correct setup for your documentation workflow. For most technical writers, a **personal account** is sufficient.

| Account Type | Description | Best For |
|---|---|---|
| **Personal** | Your individual identity on GitHub. Owns repositories, packages, and projects. All activities - commits, pull requests, and reviews - are linked to this account. | Individual technical writers and open-source contributors |
| **Organization** | A shared workspace where multiple people collaborate across many projects. Supports roles, permissions, and teams. | Documentation teams in software companies |
| **Enterprise** | Manages multiple organizations under one umbrella. Allows centralized billing, security policies, and innersourcing. | Large companies with multiple departments or product teams |

### Personal Account Types

Personal accounts come in two variants:

- **Standard personal accounts** - Created by individuals. Available as Free or Pro, depending on the features required. Most technical writers use a personal account for both open-source and professional projects.
- **Managed user accounts** - Linked to an organization's identity provider. Used in enterprise environments for controlled, secure access.

---

## Creating a New Personal Account

Follow these steps to create a free personal account on GitHub.

1. Open a web browser and go to [github.com](https://github.com).

2. In the upper-right corner, click **Sign up**.

3. Enter the following details on the sign-up page:

   | Field | Guidance |
   |---|---|
   | **Email address** | Use your professional email if you plan to collaborate with teams |
   | **Password** | Choose a strong password of at least 15 characters |
   | **Username** | Use a clear, professional format (for example, `nilesh-docwriter`). This is publicly visible. |
   | **Country/Region** | Select your country or region from the dropdown |


   > **Tip:** Your username appears in your repository URLs and is visible to collaborators and recruiters. Choose something professional and consistent with your other professional profiles.


   ![Signup Page](./Images/Sign%20up%20Page.png)


4. Set your email preferences. For example, select **Receive occasional product updates and announcements** if you want GitHub to send you product news.

5. Click **Create account**.

6. GitHub may prompt you to:
   - Select a plan. **Free** is recommended for most documentation projects.
   - Answer optional setup questions about your intended use.
   - Verify your email address by clicking the confirmation link sent to your inbox.

   > **Warning:** Do not skip email verification. Without a verified email address, certain GitHub features - including publishing with GitHub Pages - will not be available.

   > **Note:** If you experience issues verifying your email address, see [Verifying your email address](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/verifying-your-email-address) in the GitHub documentation.

   >  **Warning:** Avoid creating multiple GitHub accounts unless explicitly required by your organisation. Managing multiple accounts can cause confusion during collaboration and may conflict with your organisation's access policies.

---

## Signing In to an Existing Account

If you already have a GitHub account, you do not need to sign up again. Use one of the following methods to sign in.

### Option 1: Sign in with a username or email address

1. Go to [github.com/login](https://github.com/login).
2. Enter your **username or email address**.
3. Enter your **password**.
4. Click **Sign in**.
   
    ![Sign in](./Images/Sign%20in%20page.png)

   > 📝 **Note:** If you have two-factor authentication (2FA) enabled, you will also be prompted to enter a verification code after your password.

### Option 2: Sign in with Google

1. On the login page, click **Continue with Google**.
2. Select your Google account from the list.
3. If this is your first time linking Google to GitHub, review and grant the requested permissions.

   Once confirmed, you will be redirected to your GitHub dashboard.

---

## Resetting a Forgotten Password

If you cannot remember your password, follow these steps to reset it.

1. Go to [github.com/login](https://github.com/login) and click **Forgot password?**

    ![GitHub forgot password](./Images/Forget%20Password.png)

2. Enter your email address and complete the security puzzle.

   ![GitHub account verification screen](./Images/verify%20account%20.png)

3. Click **Send password reset email**.

4. Open the email from GitHub and follow the reset link to create a new password.

   > 📝 **Note:** If you do not receive the reset email within a few minutes, check your spam or junk folder.

---

## GitHub Desktop vs. the Command Line

Before setting up your local environment, it is important to understand the two ways you can interact with GitHub — and choose the approach that best suits your workflow.

### GitHub Desktop

GitHub Desktop is a graphical user interface (GUI) application that lets you interact with GitHub repositories without typing commands. It provides buttons, menus, and visual panels to perform common version control tasks such as cloning repositories, committing changes, pushing updates, and reviewing history.

GitHub Desktop is designed to lower the barrier to entry for users who prefer a visual workflow or are new to version control.

### The Git Command Line

The Git command line — also referred to as Git Bash (Windows), Terminal (macOS/Linux), or the CLI — is a text-based interface for interacting with Git by typing commands. It provides complete control over version control operations, from basic tasks like committing changes to advanced actions like branching, merging, and rebasing.

### Why This Guide Uses the Command Line

This guide uses the Git command line throughout. For technical writers working in Docs-as-Code environments, learning the command line offers significant advantages:

- **Collaboration with developers** — Development teams use the command line as their standard workflow. Familiarity with it allows you to work alongside engineers without friction.
- **Consistency across environments** — Command-line Git works the same way on all operating systems and hosting platforms.
- **Accuracy in documentation** — When writing documentation that involves Git-based processes, hands-on command-line experience ensures your instructions are accurate and reproducible.
- **Portability** — Unlike GUI tools, the command line does not depend on a specific application being installed or updated.

>  **Tip:** If you are completely new to the command line, consider spending 30 minutes with a beginner's guide before continuing. See [Additional Resources](./Additional%20Resources.md) for recommended starting points.


