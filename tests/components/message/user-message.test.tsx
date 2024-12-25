import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { UserMessage } from "../../../lib/components/message/user-message";

// Mock the styles
vi.mock("../../../lib/components/message/styles/messages.styles", () => ({
    UserMessageWrapper: ({
        children,
        className,
    }: {
        children: React.ReactNode;
        className?: string;
    }) => (
        <div data-testid="user-message-wrapper" className={className}>
            {children}
        </div>
    ),
    UserMessageContent: ({
        children,
        $color,
    }: {
        children: React.ReactNode;
        $color?: string;
    }) => (
        <div data-testid="user-message-content" data-color={$color}>
            {children}
        </div>
    ),
}));

describe("UserMessage", () => {
    it("should render children content", () => {
        render(
            <UserMessage>
                <div data-testid="test-content">Test Message</div>
            </UserMessage>
        );

        expect(screen.getByTestId("test-content")).toBeInTheDocument();
    });

    it("should render end content when provided", () => {
        render(
            <UserMessage endContent={<div data-testid="end-content">End</div>}>
                Message
            </UserMessage>
        );

        expect(screen.getByTestId("end-content")).toBeInTheDocument();
    });

    it("should apply custom color", () => {
        render(<UserMessage color="#ff0000">Message</UserMessage>);

        expect(screen.getByTestId("user-message-content")).toHaveAttribute(
            "data-color",
            "#ff0000"
        );
    });

    it("should apply custom className", () => {
        render(<UserMessage className="custom-class">Message</UserMessage>);

        expect(screen.getByTestId("user-message-wrapper")).toHaveClass(
            "custom-class"
        );
    });
});
