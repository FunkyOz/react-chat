import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { MessageInput } from "../../../lib/components/message/message-input";

// Mock the styles
vi.mock("../../../lib/components/message/components", () => ({
    MessageInputContainer: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="input-container">{children}</div>
    ),
    TextareaContainer: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="textarea-container">{children}</div>
    ),
    MessageInputWrapper: ({
        children,
        className,
    }: {
        children: React.ReactNode;
        className?: string;
    }) => (
        <div data-testid="input-wrapper" className={className}>
            {children}
        </div>
    ),
    /* eslint-disable react/display-name */
    Textarea: React.forwardRef<HTMLTextAreaElement>((props, ref) => (
        <textarea data-testid="textarea" {...props} ref={ref} />
    )),
    SendButton: ({
        children,
        onClick,
        disabled,
    }: {
        children: React.ReactNode;
        onClick: () => void;
        disabled: boolean;
    }) => (
        <button data-testid="send-button" onClick={onClick} disabled={disabled}>
            {children}
        </button>
    ),
}));

// Mock the icons
vi.mock("../../../lib/components/icons", () => ({
    SendIcon: () => <div data-testid="send-icon">Send</div>,
}));

// Mock the hooks
vi.mock("../../../lib/components/message/hooks/useMessageInput", () => ({
    useMessageInput: ({ onSend, value }: any) => ({
        message: value || "test message",
        textareaRef: { current: null },
        handleInput: vi.fn(),
        handleKeyDown: vi.fn(),
        handleSend: () => onSend("test message"),
    }),
}));

describe("MessageInput", () => {
    it("should render with default props", () => {
        render(<MessageInput onSend={() => {}} />);

        expect(screen.getByTestId("textarea")).toHaveAttribute(
            "placeholder",
            "Type a message..."
        );
        expect(screen.getByTestId("send-icon")).toBeInTheDocument();
    });

    it("should render with custom placeholder", () => {
        render(
            <MessageInput onSend={() => {}} placeholder="Custom placeholder" />
        );

        expect(screen.getByTestId("textarea")).toHaveAttribute(
            "placeholder",
            "Custom placeholder"
        );
    });

    it("should render with custom send icon", () => {
        render(
            <MessageInput
                onSend={() => {}}
                sendIcon={<div data-testid="custom-icon">Custom</div>}
            />
        );

        expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
        expect(screen.queryByTestId("send-icon")).not.toBeInTheDocument();
    });

    it("should apply custom className", () => {
        render(<MessageInput onSend={() => {}} className="custom-class" />);

        expect(screen.getByTestId("input-wrapper")).toHaveClass("custom-class");
    });

    it("should handle send action", () => {
        const onSendMock = vi.fn();
        render(<MessageInput onSend={onSendMock} />);

        fireEvent.click(screen.getByTestId("send-button"));

        expect(onSendMock).toHaveBeenCalledWith("test message");
    });

    it("should render with initial value", () => {
        render(<MessageInput onSend={() => {}} value="initial value" />);

        expect(screen.getByTestId("textarea")).toHaveValue("initial value");
    });
});
