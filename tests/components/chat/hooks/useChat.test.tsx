import React from "react";
import { renderHook } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { useChat } from "../../../../lib/components/chat/hooks/useChat";
import { Sidebar } from "../../../../lib/components/sidebar/sidebar";
import { MessageInput } from "../../../../lib/components/message/message-input";
import { Messages } from "../../../../lib/components/message/messages";

// Mock the components
vi.mock("../../../../lib/components/sidebar/sidebar", () => ({
    Sidebar: ({
        children,
        "data-testid": testId,
    }: {
        children?: React.ReactNode;
        "data-testid"?: string;
    }) => <div data-testid={testId || "sidebar"}>{children}</div>,
}));

vi.mock("../../../../lib/components/message/message-input", () => ({
    MessageInput: ({
        children,
        "data-testid": testId,
    }: {
        children?: React.ReactNode;
        "data-testid"?: string;
    }) => <div data-testid={testId || "message-input"}>{children}</div>,
}));

vi.mock("../../../../lib/components/message/messages", () => ({
    Messages: ({
        children,
        "data-testid": testId,
    }: {
        children?: React.ReactNode;
        "data-testid"?: string;
    }) => <div data-testid={testId || "messages"}>{children}</div>,
}));

describe("useChat", () => {
    it("should handle empty children", () => {
        const { result } = renderHook(() => useChat({ children: null }));

        expect(result.current.sidebar).toBeUndefined();
        expect(result.current.messageInput).toBeUndefined();
        expect(result.current.messages).toBeUndefined();
    });

    it("should extract single child components correctly", () => {
        const children = <Sidebar />;
        const { result } = renderHook(() => useChat({ children }));

        expect(result.current.sidebar).toBeDefined();
        expect(result.current.messageInput).toBeUndefined();
        expect(result.current.messages).toBeUndefined();
    });

    it("should extract multiple children correctly", () => {
        const children = [
            <Sidebar key="sidebar" />,
            <Messages key="messages" />,
            <MessageInput key="input" />,
        ];

        const { result } = renderHook(() => useChat({ children }));

        expect(result.current.sidebar).toBeDefined();
        expect(result.current.messageInput).toBeDefined();
        expect(result.current.messages).toBeDefined();
    });

    it("should ignore non-chat components", () => {
        const children = [
            <div key="div">Invalid Component</div>,
            <Sidebar key="sidebar" />,
            <Messages key="messages" />,
            <MessageInput key="input" />,
        ];

        const { result } = renderHook(() => useChat({ children }));

        expect(result.current.sidebar).toBeDefined();
        expect(result.current.messageInput).toBeDefined();
        expect(result.current.messages).toBeDefined();
    });

    it("should take first instance of duplicate components", () => {
        const children = [
            <Sidebar key="sidebar1" data-testid="first" />,
            <Sidebar key="sidebar2" data-testid="second" />,
            <Messages key="messages" />,
            <MessageInput key="input" />,
        ];

        const { result } = renderHook(() => useChat({ children }));

        expect(result.current.sidebar).toBeDefined();
        expect(
            (result.current.sidebar as React.ReactElement).props["data-testid"]
        ).toBe("first");
    });

    it("should handle mixed valid and invalid children", () => {
        const children = [
            null,
            undefined,
            <div key="div">Invalid</div>,
            <Sidebar key="sidebar" />,
            <Messages key="messages" />,
            <MessageInput key="input" />,
        ];

        const { result } = renderHook(() => useChat({ children }));

        expect(result.current.sidebar).toBeDefined();
        expect(result.current.messageInput).toBeDefined();
        expect(result.current.messages).toBeDefined();
    });

    it("should maintain reference equality on re-renders with same children", () => {
        const children = [
            <Sidebar key="sidebar" />,
            <Messages key="messages" />,
            <MessageInput key="input" />,
        ];

        const { result, rerender } = renderHook(
            ({ children }) => useChat({ children }),
            { initialProps: { children } }
        );

        const firstRender = {
            sidebar: result.current.sidebar,
            messages: result.current.messages,
            messageInput: result.current.messageInput,
        };

        rerender({ children });

        expect(result.current.sidebar).toBe(firstRender.sidebar);
        expect(result.current.messages).toBe(firstRender.messages);
        expect(result.current.messageInput).toBe(firstRender.messageInput);
    });
});
