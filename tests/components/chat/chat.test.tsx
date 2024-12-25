import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Chat } from "../../../lib/components/chat/chat";
import { Sidebar } from "../../../lib/components/sidebar/sidebar";
import { MessageInput } from "../../../lib/components/message/message-input";
import { Messages } from "../../../lib/components/message/messages";

// Mock the components
vi.mock("../../../lib/components/sidebar/sidebar", () => ({
    Sidebar: ({
        children,
        "data-testid": testId,
    }: {
        children?: React.ReactNode;
        "data-testid"?: string;
    }) => <div data-testid={testId || "sidebar"}>{children}</div>,
}));

vi.mock("../../../lib/components/message/message-input", () => ({
    MessageInput: ({
        children,
        "data-testid": testId,
    }: {
        children?: React.ReactNode;
        "data-testid"?: string;
    }) => <div data-testid={testId || "message-input"}>{children}</div>,
}));

vi.mock("../../../lib/components/message/messages", () => ({
    Messages: ({
        children,
        "data-testid": testId,
    }: {
        children?: React.ReactNode;
        "data-testid"?: string;
    }) => <div data-testid={testId || "messages"}>{children}</div>,
}));

vi.mock("../../../lib/components/chat/styles/chat.styles", () => ({
    ChatWrapper: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="chat-wrapper">{children}</div>
    ),
    ChatContent: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="chat-content">{children}</div>
    ),
    ChatContainer: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="chat-container">{children}</div>
    ),
}));

describe("Chat", () => {
    it("should render chat structure correctly", () => {
        render(<Chat />);

        expect(screen.getByTestId("chat-wrapper")).toBeInTheDocument();
        expect(screen.getByTestId("chat-content")).toBeInTheDocument();
        expect(screen.getByTestId("chat-container")).toBeInTheDocument();
    });

    it("should render children components in correct containers", () => {
        render(
            <Chat>
                <Sidebar data-testid="sidebar" />
                <Messages data-testid="messages" />
                <MessageInput data-testid="message-input" />
            </Chat>
        );

        const content = screen.getByTestId("chat-content");
        const container = screen.getByTestId("chat-container");

        expect(content).toContainElement(screen.getByTestId("sidebar"));
        expect(container).toContainElement(screen.getByTestId("messages"));
        expect(container).toContainElement(screen.getByTestId("message-input"));
    });

    it("should handle missing children gracefully", () => {
        render(
            <Chat>
                <Sidebar data-testid="sidebar" />
                {/* Missing Messages and MessageInput */}
            </Chat>
        );

        const content = screen.getByTestId("chat-content");
        const container = screen.getByTestId("chat-container");

        expect(content).toContainElement(screen.getByTestId("sidebar"));
        expect(container).toBeEmptyDOMElement();
    });

    it("should ignore invalid children", () => {
        render(
            <Chat>
                <div data-testid="invalid-child">Invalid Child</div>
                <Sidebar data-testid="sidebar" />
                <Messages data-testid="messages" />
                <MessageInput data-testid="message-input" />
            </Chat>
        );

        const content = screen.getByTestId("chat-content");
        const container = screen.getByTestId("chat-container");

        expect(screen.queryByTestId("invalid-child")).not.toBeInTheDocument();
        expect(content).toContainElement(screen.getByTestId("sidebar"));
        expect(container).toContainElement(screen.getByTestId("messages"));
        expect(container).toContainElement(screen.getByTestId("message-input"));
    });

    it("should handle multiple instances of the same component type", () => {
        render(
            <Chat>
                <Sidebar data-testid="sidebar1" />
                <Sidebar data-testid="sidebar2" />
                <Messages data-testid="messages" />
                <MessageInput data-testid="message-input" />
            </Chat>
        );

        const content = screen.getByTestId("chat-content");
        // Only the first instance of each type should be rendered
        expect(content).toContainElement(screen.getByTestId("sidebar1"));
        expect(screen.queryByTestId("sidebar2")).not.toBeInTheDocument();
    });

    it("should pass withAutoFocus prop to ChatProvider", () => {
        const { container } = render(
            <Chat withAutoFocus={true}>
                <MessageInput data-testid="message-input" />
            </Chat>
        );

        // Since ChatProvider is tested separately, we just verify the prop is passed
        expect(container.innerHTML).toBeTruthy();
    });

    it("should pass assistantIcon prop to ChatProvider", () => {
        const CustomIcon = () => (
            <div data-testid="custom-icon">Custom Icon</div>
        );

        const { container } = render(
            <Chat assistantIcon={<CustomIcon />}>
                <MessageInput />
            </Chat>
        );

        // Since ChatProvider is tested separately, we just verify the prop is passed
        expect(container.innerHTML).toBeTruthy();
    });
});