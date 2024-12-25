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
    LoadingCircle: () => <div data-testid="loading-circle">Loading...</div>,
    IconWrapper: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="icon-wrapper">{children}</div>
    ),
}));

describe("AssistantLoading", () => {
    it("should render loading circle", () => {
        render(<AssistantLoading />);
        expect(screen.getByTestId("loading-circle")).toBeInTheDocument();
    });

    it("should render assistant icon from context", () => {
        render(
            <AssistantLoading icon={<div data-testid="default-icon">AI</div>} />
        );
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

        const messageWrapper = screen.getByTestId("assistant-message-wrapper");
        const iconWrapper = screen.getByTestId("icon-wrapper");
        const content = screen.getByTestId("assistant-message-content");
        const loading = screen.getByTestId("loading-circle");

        expect(messageWrapper).toBeInTheDocument();
        expect(iconWrapper).toBeInTheDocument();
        expect(content).toBeInTheDocument();
        expect(loading).toBeInTheDocument();
    });
});
