# Creating and Managing Repositories
## What Is a Repository?
A repository stores a project's documentation, configuration files, and assets with the complete history of every change. Contributors can use that history to review modifications, restore an earlier version, and trace how the content changed.
Repositories can have one or more collaborators and support two visibility settings:
- **Public:** visible to anyone on the internet; suitable for open-source documentation projects.
- **Private:** accessible only to the repository owner and explicitly added collaborators; suitable for internal or proprietary documentation.
For a documentation team, the repository is the shared source for the project files and their review history.

## Create and Clone a Repository from GitHub
### 1. Create an empty repository on GitHub:
 A. Go to the https://github.com/ and sign in to your account.
 
**Note:** If you do not have a GitHub account, see [Getting Started with GitHub](./Getting%20Started.md) for setup instructions.

  B. In the upper right corner, select **+** then click **New repository**.
    
  ![New Repo](./Images/new%20repo.png)
    
C. Under **Owner**, use the dropdown menu to select the account or organization that will own the repository.
    
  ![Choose owner](./Images/Choose%20an%20owner.png)
    
  D. In the **Repository name** field, enter a concise, descriptive name. Optionally, add a short description in the **Description field**.
  
  **Tip**: Use lowercase letters and hyphens for repository names (for example, *product-docs* or *api-reference*). This keeps names consistent across operating systems and avoids URL encoding issues.

![Repo name and description](./Images/Repo%20Name.png)

  E. Select a visibility setting:
  - Choose **Public** if the documentation is intended for open access.
  - Choose **Private** if the documentation is internal or restricted.

**Note:** For more information, see [About repository visibility](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility) in the GitHub documentation.
   
 F. Under **Initialize this repository with**, configure the following options:

   | Option | Recommended Action | Reason |
   |---|---|---|
   | Add a README file | ✅ Select | Creates a default landing page for the repository |
   | Add .gitignore | ⬜ Leave unselected | Not required for documentation-only repositories |
| Choose a license | ⬜ Leave unselected | Add a license later if required by your organization |

   > **Note:** The optional **template** and **GitHub Marketplace apps** settings are not required for a standard documentation repository. You can configure these later if needed.

  K. Click **Create repository**.
    ![Configuration](./Images/Repo%20creation.png)
    
 GitHub creates the repository and displays the repository home page.
 
   ![Output page](./Images/Output%20after%20repo%20creation.png)

### 2. Clone the repository to your local machine:
Clone the repository to create a local copy that you can edit with your preferred text editor.

1. On the repository home page, click **Code**.

2. In the dropdown, select your preferred clone method and copy the URL:

   | Method | When to Use |
   |---|---|
   | **HTTPS** | Recommended for beginners. Works on all networks without additional configuration. |
   | **SSH** | Recommended for regular contributors. Requires SSH key setup but avoids repeated password prompts. |

   >  **Tip:** If you are new to GitHub, use HTTPS. You can switch to SSH later once you are comfortable with the workflow. See [Connecting to GitHub with SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) for setup instructions.

3. Open a terminal (macOS or Linux) or Git Bash (Windows).

4. Navigate to the directory where you want to store the repository:
   
   ```bash
      cd path/to/your/folder
   ```

6. Run the clone command using the URL you copied:

   ```bash
   git clone <repository-url>
   ```

   **Example:**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

7. After cloning completes, navigate into the repository folder:

   ```bash
   cd your-repo-name
   ```

After cloning, the local copy points to the GitHub repository. You can commit local changes and push them to that remote repository.



   

