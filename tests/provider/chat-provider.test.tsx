import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ChatProvider } from "../../lib/provider/chat-provider";

describe("ChatProvider", () => {
    it("should render children", () => {
        render(
            <ChatProvider>
                <div data-testid="test-child">Test Child</div>
            </ChatProvider>
        );

        expect(screen.getByTestId("test-child")).toBeInTheDocument();
    });
});
