import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { AssistantLoading } from "../../../lib/components/message/assistant-loading";

// Mock the styles
vi.mock("../../../lib/components/message/styles/messages.styles", () => ({
    AssistantMessageWrapper: ({
        children,
        className,
    }: {
        children: React.ReactNode;
        className?: string;
    }) => (
        <div data-testid="assistant-message-wrapper" className={className}>
            {children}
        </div>
    ),
    AssistantMessageContent: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="assistant-message-content">{children}</div>
    ),
    AssistantIconWrapper: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="assistant-icon-wrapper">{children}</div>
    ),
    LoadingCircle: () => <div data-testid="loading-circle">Loading...</div>,
}));

// Mock the ChatProvider
vi.mock("../../../lib/provider", () => ({
    useChatProvider: () => ({
        state: {
            assistantIcon: <div data-testid="default-icon">AI</div>,
        },
    }),
}));

describe("AssistantLoading", () => {
    it("should render loading circle", () => {
        render(<AssistantLoading />);
        expect(screen.getByTestId("loading-circle")).toBeInTheDocument();
    });

    it("should render assistant icon from context", () => {
        render(<AssistantLoading />);
        expect(screen.getByTestId("default-icon")).toBeInTheDocument();
    });

    it("should apply custom className", () => {
        render(<AssistantLoading className="custom-class" />);
        expect(screen.getByTestId("assistant-message-wrapper")).toHaveClass(
            "custom-class"
        );
    });

    it("should render with proper structure", () => {
        render(<AssistantLoading />);

        expect(
            screen.getByTestId("assistant-message-wrapper")
        ).toBeInTheDocument();
        expect(
            screen.getByTestId("assistant-icon-wrapper")
        ).toBeInTheDocument();
        expect(
            screen.getByTestId("assistant-message-content")
        ).toBeInTheDocument();
        expect(screen.getByTestId("loading-circle")).toBeInTheDocument();
    });
});
