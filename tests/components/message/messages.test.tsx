import { render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Messages } from "../../../lib/components/message/messages";

// Mock matchMedia
Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // Deprecated
        removeListener: vi.fn(), // Deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
    })),
});

vi.mock("../../../lib/components/message/components", () => ({
    MessagesWrapper: ({
        children,
        className,
    }: {
        children: React.ReactNode;
        className?: string;
    }) => (
        <div data-testid="messages-wrapper" className={className}>
            {children}
        </div>
    ),
    /* eslint-disable react/display-name */
    BottomHelper: React.forwardRef<HTMLDivElement>((props, ref) => (
        <div data-testid="bottom-helper" ref={ref} />
    )),
    MessagesHeader: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="messages-header">{children}</div>
    ),
}));

vi.mock("../../../lib/provider", () => ({
    useChatProvider: vi.fn(() => ({
        state: {
            isSidebarOpen: true,
        },
        dispatch: vi.fn(),
    })),
}));

describe("Messages", () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    it("should render children directly when children is not a function", () => {
        render(
            <Messages>
                <div data-testid="test-child">Test Content</div>
            </Messages>
        );

        expect(screen.getByTestId("test-child")).toBeInTheDocument();
    });

    it("should render items using children function when provided", () => {
        const items = [
            { id: 1, text: "Message 1" },
            { id: 2, text: "Message 2" },
        ];
        const renderItem = (item: (typeof items)[0], key: number) => (
            <div key={key} data-testid={`message-${item.id}`}>
                {item.text}
            </div>
        );

        render(<Messages items={items}>{renderItem}</Messages>);

        expect(screen.getByTestId("message-1")).toHaveTextContent("Message 1");
        expect(screen.getByTestId("message-2")).toHaveTextContent("Message 2");
    });

    it("should render loading content when isLoading is true", () => {
        render(
            <Messages
                isLoading={true}
                loadingContent={<div data-testid="loading">Loading...</div>}
            >
                <div>Content</div>
            </Messages>
        );

        expect(screen.getByTestId("loading")).toBeInTheDocument();
    });

    it("should not render loading content when isLoading is false", () => {
        render(
            <Messages
                isLoading={false}
                loadingContent={<div data-testid="loading">Loading...</div>}
            >
                <div>Content</div>
            </Messages>
        );

        expect(screen.queryByTestId("loading")).not.toBeInTheDocument();
    });

    it("should apply className to wrapper", () => {
        render(
            <Messages className="custom-class">
                <div>Content</div>
            </Messages>
        );

        expect(screen.getByTestId("messages-wrapper")).toHaveClass(
            "custom-class"
        );
    });
});
