# Welcome to the Lumbridge Starter Astro Application

1. **Create a new repository in GitHub**:
   - Visit [this link](https://github.com/orgs/Lumbr1dge/repositories).
   - Click the green button labeled **"New Repository"**.

2. **Use the correct naming convention**:
   - Examples: `jack-immigration`, `harika-builders`, `prime-immigration`.
   - Use only lowercase letters, and separate words with dashes.

3. **Download the setup script**:
   - Go to [this page](https://github.com/Lumbr1dge/base-astro-app/blob/main/new-project-setup.ps1).
   - Click the download arrow located next to the **"Raw"** button.
   - Save the file in the `C:/` drive.

4. **Open PowerShell as an Administrator**:
   - Search for "PowerShell" in the Start menu.
   - Right-click and select **"Run as Administrator"**.

5. **Set the execution policy**:
   - Run the following command:  
     ```powershell
     Set-ExecutionPolicy RemoteSigned
     ```

6. **Run the setup script**:
   - Execute the following command:  
     ```powershell
     .\new-project-setup.ps1
     ```

7. **Important step**:
   - Reset the execution policy by running:  
     ```powershell
     Set-ExecutionPolicy Restricted
     ```

8. **Your new project is ready**:
   - A new project folder at ```C:\projects\lumbr1dge\<new project>``` with all the startup code will be created.
   - Open the folder in cursor, run the following commands, and start coding:
     ```bash
     npm install
     npm run dev
     ```
9. **Important Stuff**:
    - Make sure you follow the directory structure as provide in the base project. Delete any files that are not needed.

10. **Project Directory Structure**:
    ```
    project-root/
    ├── public/                 # Static assets (images, fonts, etc.)
    ├── src/
    │   ├── assets/           # Project assets (SVGs, images that need processing)
    │   ├── components/        # Reusable UI components
    │   │   ├── common/       # Shared components (buttons, inputs, etc.)
    │   │   └── layout/       # Layout components (header, footer, etc.)
    │   ├── content/          # Markdown/MDX content files
    │   ├── layouts/          # Page layouts and templates
    │   ├── pages/            # Route pages
    │   │   └── api/         # API endpoints
    │   ├── styles/          # Global styles and CSS modules
    │   └── utils/           # Utility functions and helpers
    ├── astro.config.mjs      # Astro configuration
    ├── package.json          # Project dependencies and scripts
    ├── tsconfig.json         # TypeScript configuration
    └── README.md            # Project documentation
    ```

    Each directory serves a specific purpose:
    - `public/`: Files placed here are served directly without any processing. Use for:
        - Favicons
        - Fonts
        - Large images that don't need optimization
        - Files that need to keep their exact names
        - Files you need to link to directly from the public URL
    - `src/assets/`: Files here are processed during build time. Use for:
        - Images that need optimization (they'll be automatically compressed)
        - SVGs that you want to import directly into components
        - Images that you want to use with Astro's image components
        - Assets that need processing or transformation
    - `components/`: React/Astro components organized by feature or type
    - `content/`: Content files in Markdown or MDX format
    - `layouts/`: Page templates and layouts
    - `pages/`: Files in this directory automatically become routes
    - `styles/`: Global CSS and style modules
    - `utils/`: Helper functions, constants, and utility code
