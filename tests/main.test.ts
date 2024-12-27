import { expect, it } from "vitest";
import * as Main from "../lib/main";

it("should have all expected exports in main", () => {
    const expectedExports = [
        "Chat",
        "Messages",
        "MessageInput",
        "Sidebar",
        "SidebarItem",
        "UserMessage",
        "AssistantMessage",
        "AssistantLoading",
        "MarkdownContent",
    ];

    expectedExports.forEach((exportName) => {
        expect(Main).toHaveProperty(exportName);
    });
});
