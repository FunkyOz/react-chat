import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import {
    ChatProvider,
    useChatProvider,
} from "../../lib/provider/chat-provider";

describe("ChatProvider", () => {
    it("should render children", () => {
        render(
            <ChatProvider>
                <div data-testid="test-child">Test Child</div>
            </ChatProvider>
        );

        expect(screen.getByTestId("test-child")).toBeInTheDocument();
    });

    it("should provide context to children", () => {
        const TestComponent = () => {
            const { state } = useChatProvider();
            return (
                <div data-testid="test-context">
                    {state.withAutoFocus.toString()}
                </div>
            );
        };

        render(
            <ChatProvider withAutoFocus={true}>
                <TestComponent />
            </ChatProvider>
        );

        expect(screen.getByTestId("test-context")).toHaveTextContent("true");
    });

    it("should throw error when useChatProvider is used outside provider", () => {
        const TestComponent = () => {
            useChatProvider();
            return null;
        };

        expect(() => {
            render(<TestComponent />);
        }).toThrow("useChatProvider must be used within a ChatProvider");
    });
});
