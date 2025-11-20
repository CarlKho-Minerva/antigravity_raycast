import {
  ActionPanel,
  Action,
  List,
  Icon,
  showToast,
  Toast,
  getPreferenceValues,
  useNavigation,
} from "@raycast/api";
import { useState, useEffect } from "react";
import { readdirSync, statSync } from "fs";
import { join } from "path";
import { homedir } from "os";
import { openInAntigravity } from "./utils";

interface Preferences {
  projectRoot: string;
}

function getProjectRoot() {
  const prefs = getPreferenceValues<Preferences>();
  let root = prefs.projectRoot;
  if (root.startsWith("~")) {
    root = root.replace("~", homedir());
  }
  return root;
}

function ProjectList({
  path,
  navigationTitle,
}: {
  path: string;
  navigationTitle?: string;
}) {
  const [items, setItems] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { push } = useNavigation();

  useEffect(() => {
    try {
      const files = readdirSync(path);
      const directories = files.filter((file) => {
        if (file.startsWith(".")) return false;
        try {
          return statSync(join(path, file)).isDirectory();
        } catch {
          return false;
        }
      });
      setItems(directories);
    } catch (error) {
      showToast({
        style: Toast.Style.Failure,
        title: "Failed to load projects",
        message: String(error),
      });
    } finally {
      setIsLoading(false);
    }
  }, [path]);

  return (
    <List
      isLoading={isLoading}
      searchBarPlaceholder="Search projects..."
      navigationTitle={navigationTitle}
    >
      {items.map((item) => {
        const fullPath = join(path, item);
        return (
          <List.Item
            key={fullPath}
            title={item}
            icon={Icon.Folder}
            actions={
              <ActionPanel>
                <Action
                  title="Open in Antigravity"
                  onAction={() => openInAntigravity(fullPath)}
                />
                <Action
                  title="Browse Folder"
                  icon={Icon.ArrowRight}
                  shortcut={{ modifiers: ["cmd"], key: "return" }}
                  onAction={() =>
                    push(<ProjectList path={fullPath} navigationTitle={item} />)
                  }
                />
                <Action
                  title="Open in New Window"
                  icon={Icon.AppWindow}
                  onAction={() =>
                    openInAntigravity(fullPath, { newWindow: true })
                  }
                />
                <Action.ShowInFinder path={fullPath} />
                <Action.CopyToClipboard title="Copy Name" content={item} />
                <Action.CopyToClipboard title="Copy Path" content={fullPath} />
              </ActionPanel>
            }
          />
        );
      })}
    </List>
  );
}

export default function Command() {
  const root = getProjectRoot();
  return <ProjectList path={root} />;
}
