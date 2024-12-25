import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { AssistantMessage } from "../../../lib/components/message/assistant-message";

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
    IconWrapper: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="icon-wrapper">{children}</div>
    ),
}));

describe("AssistantMessage", () => {
    it("should render children content", () => {
        render(
            <AssistantMessage>
                <div data-testid="test-content">Test Message</div>
            </AssistantMessage>
        );

        expect(screen.getByTestId("test-content")).toBeInTheDocument();
    });

    it("should render end content when provided", () => {
        render(
            <AssistantMessage
                endContent={<div data-testid="end-content">End</div>}
            >
                Message
            </AssistantMessage>
        );

        expect(screen.getByTestId("end-content")).toBeInTheDocument();
    });

    it("should render assistant icon", () => {
        render(
            <AssistantMessage icon={<div data-testid="default-icon">AI</div>}>
                Message
            </AssistantMessage>
        );

        expect(screen.getByTestId("default-icon")).toBeInTheDocument();
    });

    it("should apply custom className", () => {
        render(
            <AssistantMessage className="custom-class">
                Message
            </AssistantMessage>
        );

        expect(screen.getByTestId("assistant-message-wrapper")).toHaveClass(
            "custom-class"
        );
    });

    it("should render with proper structure", () => {
        render(<AssistantMessage>Message</AssistantMessage>);

        const messageWrapper = screen.getByTestId("assistant-message-wrapper");
        const iconWrapper = screen.getByTestId("icon-wrapper");
        const content = screen.getByTestId("assistant-message-content");

        expect(messageWrapper).toBeInTheDocument();
        expect(iconWrapper).toBeInTheDocument();
        expect(content).toBeInTheDocument();
    });
});
