import {
  ActionPanel,
  Action,
  List,
  showToast,
  Toast,
  getPreferenceValues,
  Icon,
} from "@raycast/api";
import { exec } from "child_process";
import { promisify } from "util";
import { useState, useEffect } from "react";

const execAsync = promisify(exec);

interface Preferences {
  antigravityPath: string;
}

export default function Command() {
  const [extensions, setExtensions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const preferences = getPreferenceValues<Preferences>();
  const antigravityPath = preferences.antigravityPath;

  useEffect(() => {
    async function fetchExtensions() {
      try {
        const { stdout } = await execAsync(
          `"${antigravityPath}" --list-extensions`,
        );
        const extList = stdout.split("\n").filter((line) => line.trim() !== "");
        setExtensions(extList);
      } catch (error) {
        showToast({
          style: Toast.Style.Failure,
          title: "Failed to list extensions",
          message: String(error),
        });
      } finally {
        setIsLoading(false);
      }
    }

    fetchExtensions();
  }, [antigravityPath]);

  return (
    <List
      isLoading={isLoading}
      searchBarPlaceholder="Search installed extensions..."
    >
      {extensions.map((ext) => (
        <List.Item
          key={ext}
          title={ext}
          icon={Icon.Box}
          actions={
            <ActionPanel>
              <Action.CopyToClipboard title="Copy Extension Id" content={ext} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
