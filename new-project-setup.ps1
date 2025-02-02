# Check if the script is being run as an administrator
if (-not ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) {
    Write-Host "Error: This script must be run as an administrator." -ForegroundColor Red
    exit 1
}

try {
    # Step 1: Parameters
    $BaseAstroRepoURL = "https://github.com/Lumbr1dge/base-astro-app.git"

    # Step 2: Prompt the user to enter the GitHub repository URL for the new project
    $UserRepoURL = Read-Host -Prompt "Enter the GitHub repository URL for your new project"

    # Validate the provided GitHub repository URL
    if (-not ($UserRepoURL -match "https://github.com/([^/]+)/([^/]+)")) {
        Write-Host "Error: Invalid GitHub repository URL." -ForegroundColor Red
        exit 1
    }

    # Define the projects directory
    $ProjectsDir = "C:\Projects\lumbr1dge"

    # Ensure the projects directory exists
    if (-not (Test-Path -Path $ProjectsDir)) {
        Write-Host "Creating the projects directory at '$ProjectsDir'..." -ForegroundColor Cyan
        New-Item -Path $ProjectsDir -ItemType Directory | Out-Null
    }

    # Extract the repository name from the provided GitHub URL
    $RepoName = ($UserRepoURL -split "/")[-1] -replace "\.git$", ""

    # Define the path for the cloned project
    $NewProjectPath = Join-Path -Path $ProjectsDir -ChildPath $RepoName

    # Step 3: Clone the user-provided repository
    Write-Host "Cloning user repository..." -ForegroundColor Cyan
    git clone $UserRepoURL $NewProjectPath

    # Check if cloning was successful
    if (-not (Test-Path -Path $NewProjectPath)) {
        Write-Host "Error: Failed to clone the repository. Please check the URL and try again." -ForegroundColor Red
        exit 1
    }

    # Step 4: Clone the base Astro app repository
    $BaseAstroPath = Join-Path -Path $ProjectsDir -ChildPath "base-astro-app"
    Write-Host "Cloning base Astro app repository..." -ForegroundColor Cyan
    git clone $BaseAstroRepoURL $BaseAstroPath

    # Check if cloning was successful
    if (-not (Test-Path -Path $BaseAstroPath)) {
        Write-Host "Error: Failed to clone the base Astro app repository." -ForegroundColor Red
        exit 1
    }

    # Step 5: Copy files from the base Astro app to the cloned repository
    Write-Host "Copying base Astro app files into the cloned repository..." -ForegroundColor Cyan
    Get-ChildItem -Path $BaseAstroPath -Recurse -Exclude ".git" | ForEach-Object {
        $DestinationPath = $_.FullName.Replace($BaseAstroPath, $NewProjectPath)
        if ($_.PSIsContainer) {
            if (-not (Test-Path -Path $DestinationPath)) {
                New-Item -Path $DestinationPath -ItemType Directory | Out-Null
            }
        } else {
            Copy-Item -Path $_.FullName -Destination $DestinationPath -Force
        }
    }

    # Step 6: Clean up - Delete the cloned base Astro app repository
    Write-Host "Cleaning up the cloned base Astro app repository..." -ForegroundColor Cyan
    Remove-Item -Path $BaseAstroPath -Recurse -Force

    # Confirm success
    Write-Host "Base Astro app has been successfully copied into the repository at $NewProjectPath" -ForegroundColor Green
    Write-Host "You can now navigate to the folder and continue with your project setup." -ForegroundColor Green

} finally {
    Write-Host "Script execution completed." -ForegroundColor Yellow
}
