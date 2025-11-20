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
  /** Preferences accessible in the `open-project` command */
  export type OpenProject = ExtensionPreferences & {}
  /** Preferences accessible in the `open-file` command */
  export type OpenFile = ExtensionPreferences & {}
  /** Preferences accessible in the `open-new-window` command */
  export type OpenNewWindow = ExtensionPreferences & {}
  /** Preferences accessible in the `show-installed-extensions` command */
  export type ShowInstalledExtensions = ExtensionPreferences & {}
  /** Preferences accessible in the `open-with-antigravity` command */
  export type OpenWithAntigravity = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `search-recent-projects` command */
  export type SearchRecentProjects = {}
  /** Arguments passed to the `open-project` command */
  export type OpenProject = {}
  /** Arguments passed to the `open-file` command */
  export type OpenFile = {}
  /** Arguments passed to the `open-new-window` command */
  export type OpenNewWindow = {}
  /** Arguments passed to the `show-installed-extensions` command */
  export type ShowInstalledExtensions = {}
  /** Arguments passed to the `open-with-antigravity` command */
  export type OpenWithAntigravity = {}
}

