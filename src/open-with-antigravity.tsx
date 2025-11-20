import {
  getSelectedFinderItems,
  closeMainWindow,
  showToast,
  Toast,
} from "@raycast/api";
import { openInAntigravity } from "./utils";

export default async function Command() {
  try {
    const items = await getSelectedFinderItems();
    if (items.length === 0) {
      await showToast({
        style: Toast.Style.Failure,
        title: "No files selected",
        message: "Select files in Finder to open in Antigravity",
      });
      return;
    }

    for (const item of items) {
      await openInAntigravity(item.path);
    }

    await closeMainWindow();
  } catch (error) {
    await showToast({
      style: Toast.Style.Failure,
      title: "Failed to open files",
      message: String(error),
    });
  }
}
