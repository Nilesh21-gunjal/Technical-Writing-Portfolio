# Creating and Managing Repositories
## What Is a Repository?
A repository (commonly referred to as a repo) is the foundational unit of a GitHub project. It stores all project files — including documentation, configuration files, and assets — along with a complete history of every change ever made. This revision history allows contributors to track modifications, revert to earlier versions, and understand how content has evolved over time.
Repositories can have one or more collaborators and support two visibility settings:
- **Public**- Visible to anyone on the internet. Suitable for open-source documentation projects.
- **Private**- Accessible only to the repository owner and explicitly added collaborators. Suitable for internal or proprietary documentation.
For technical writers, a repository serves as the single source of truth for a documentation project. 

## Create and Clone a Repository from GitHub
### 1. Create an empty repository on GitHub:
 A. Go to the https://github.com/ and sign in to your account.
 
**Note:** If you do not have a GitHub account, see [Getting Started with GitHub](./Getting%20Started.md) for setup instructions.

  B. In the upper right corner, select **+** then click **New repository**.
    
  ![New Repo](./Images/new%20repo.png)
    
  C. Under **Owner**, use the dropdown menu to select the account or organisation that will own the repository.
    
  ![Choose owner](./Images/Choose%20an%20owner.png)
    
  D. In the **Repository name** field, enter a concise, descriptive name. Optionally, add a short description in the **Description field**.
  
  **Tip**: Use lowercase letters and hyphens for repository names (for example, *product-docs* or *api-reference*). This ensures compatibility across all operating systems and avoids URL encoding issues.

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
   | Choose a license | ⬜ Leave unselected | Add a license later if required by your organisation |

   > **Note:** The optional **template** and **GitHub Marketplace apps** settings are not required for a standard documentation repository. You can configure these later if needed.

  K. Click **Create repository**.
    ![Configuration](./Images/Repo%20creation.png)
    
 GitHub creates the repository and displays the repository home page.
 
   ![Output page](./Images/Output%20after%20repo%20creation.png)

### 2. Clone the repository to your local machine:
Cloning creates a local copy of the repository on your computer, allowing you to add and edit files using your preferred text editor.

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

Your local copy is now connected to the remote repository on GitHub. Any changes you make locally can be pushed back to GitHub using standard Git commands.



   

