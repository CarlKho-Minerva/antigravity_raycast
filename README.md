# Antigravity for Raycast

Control Google Antigravity IDE from Raycast.

## Features

- **Open Project**: Browse and open projects from your configured project root.
- **Open File**: Quickly open files in Antigravity.
- **Search Recent Projects**: Access your recently opened projects from Antigravity's history.

## Setup

1.  **Install the Extension**: Import this extension into Raycast.
2.  **Configure Preferences**:
    - **Antigravity CLI Path**: Path to the `antigravity` binary. Default is `/Applications/Antigravity.app/Contents/Resources/app/bin/antigravity`.
    - **Project Root**: The directory where you keep your projects (e.g., `~/Documents`).

## Troubleshooting

- **Antigravity not opening**: Ensure the CLI path is correct. You can verify it by running `ls /Applications/Antigravity.app/Contents/Resources/app/bin/antigravity` in your terminal.
- **Recent projects empty**: Ensure you have opened projects in Antigravity before. The extension reads from Antigravity's internal database.
