import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Messages } from "../../../lib/components/message/messages";

// Mock the styles
vi.mock("../../../lib/components/message/styles/messages.styles", () => ({
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
}));

// Mock the useScrollToBottom hook
vi.mock("../../../lib/components/message/hooks/useScrollToBottom", () => ({
    useScrollToBottom: () => ({ current: { scrollIntoView: vi.fn() } }),
}));

describe("Messages", () => {
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

    it("should render bottom helper for scrolling", () => {
        render(
            <Messages>
                <div>Content</div>
            </Messages>
        );

        expect(screen.getByTestId("bottom-helper")).toBeInTheDocument();
    });
});
