/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Antigravity CLI Path - Path to the Antigravity CLI binary */
  "antigravityPath": string,
  /** Project Root - Directory containing your projects */
  "projectRoot": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search-recent-projects` command */
  export type SearchRecentProjects = ExtensionPreferences & {}
  /** Preferences accessible in the `open-file-folder` command */
  export type OpenFileFolder = ExtensionPreferences & {}
  /** Preferences accessible in the `open-new-window` command */
  export type OpenNewWindow = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `search-recent-projects` command */
  export type SearchRecentProjects = {}
  /** Arguments passed to the `open-file-folder` command */
  export type OpenFileFolder = {}
  /** Arguments passed to the `open-new-window` command */
  export type OpenNewWindow = {}
}

