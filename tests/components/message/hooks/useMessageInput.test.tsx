import React from "react";
import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { useMessageInput } from "../../../../lib/components/message/hooks/useMessageInput";

// Mock ChatProvider context
vi.mock("../../../../lib/provider", () => ({
    useChatProvider: () => ({
        state: { isSidebarOpen: true },
    }),
}));

describe("useMessageInput", () => {
    const onSendMock = vi.fn();
    let mockTextarea: {
        style: { height: string };
        scrollHeight: number;
        focus: () => void;
    };

    const createKeyboardEvent = (options: {
        key: string;
        shiftKey: boolean;
    }) => {
        return new KeyboardEvent("keydown", {
            ...options,
            bubbles: true,
        }) as unknown as React.KeyboardEvent<HTMLTextAreaElement>;
    };

    beforeEach(() => {
        mockTextarea = {
            style: { height: "0px" },
            scrollHeight: 100,
            focus: vi.fn(),
        };
        vi.clearAllMocks();
        vi.spyOn(React, "useRef").mockReturnValue({ current: mockTextarea });
    });

    it("should initialize with provided value", () => {
        const { result } = renderHook(() =>
            useMessageInput({ value: "initial value", onSend: onSendMock })
        );
        expect(result.current.message).toBe("initial value");
    });

    it("should update message on input change", () => {
        const { result } = renderHook(() =>
            useMessageInput({ onSend: onSendMock })
        );

        act(() => {
            result.current.handleInput({
                target: { value: "new message" },
            } as React.ChangeEvent<HTMLTextAreaElement>);
        });

        expect(result.current.message).toBe("new message");
    });

    it("should handle send action", () => {
        const { result } = renderHook(() =>
            useMessageInput({ onSend: onSendMock })
        );

        act(() => {
            result.current.handleInput({
                target: { value: "test message" },
            } as React.ChangeEvent<HTMLTextAreaElement>);
        });

        act(() => {
            result.current.handleSend();
        });

        expect(onSendMock).toHaveBeenCalledWith("test message");
        expect(result.current.message).toBe("");
    });

    it("should not send empty messages", () => {
        const { result } = renderHook(() =>
            useMessageInput({ onSend: onSendMock })
        );

        act(() => {
            result.current.handleInput({
                target: { value: "   " },
            } as React.ChangeEvent<HTMLTextAreaElement>);
        });

        act(() => {
            result.current.handleSend();
        });

        expect(onSendMock).not.toHaveBeenCalled();
    });

    it("should handle Enter key press", () => {
        const { result } = renderHook(() =>
            useMessageInput({ onSend: onSendMock })
        );

        act(() => {
            result.current.handleInput({
                target: { value: "test message" },
            } as React.ChangeEvent<HTMLTextAreaElement>);
        });

        act(() => {
            result.current.handleKeyDown(
                createKeyboardEvent({ key: "Enter", shiftKey: false })
            );
        });

        expect(onSendMock).toHaveBeenCalledWith("test message");
    });

    it("should not send on Shift+Enter", () => {
        const { result } = renderHook(() =>
            useMessageInput({ onSend: onSendMock })
        );

        act(() => {
            result.current.handleInput({
                target: { value: "test message" },
            } as React.ChangeEvent<HTMLTextAreaElement>);
        });

        act(() => {
            result.current.handleKeyDown(
                createKeyboardEvent({ key: "Enter", shiftKey: true })
            );
        });

        expect(onSendMock).not.toHaveBeenCalled();
    });

    it("should update message when value prop changes", () => {
        const { result, rerender } = renderHook(
            ({ value }) => useMessageInput({ value, onSend: onSendMock }),
            { initialProps: { value: "initial" } }
        );

        expect(result.current.message).toBe("initial");

        rerender({ value: "updated" });
        expect(result.current.message).toBe("updated");
    });
});
