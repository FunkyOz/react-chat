import { renderHook, act } from "@testing-library/react";
import useMarkdownContent from "../../../../lib/components/content/hooks/useMarkdownContent";
import { expect, it, vi, describe, beforeAll } from "vitest";

beforeAll(() => {
    Object.defineProperty(global.navigator, "clipboard", {
        value: {
            writeText: vi.fn().mockResolvedValue(undefined),
        },
        writable: true,
    });
});

describe("useMarkdownContent", () => {
    it("should copy code to clipboard and call onCodeCopied callback", async () => {
        const onCodeCopied = vi.fn();
        const { result } = renderHook(() => useMarkdownContent(onCodeCopied));

        await act(async () => {
            await result.current.handleCopy("test code");
        });

        expect(onCodeCopied).toHaveBeenCalledWith("test code");
        expect(result.current.isCopied).toBe(true);
    });

    it("should not copy code if already copied", async () => {
        const onCodeCopied = vi.fn();
        const { result } = renderHook(() => useMarkdownContent(onCodeCopied));

        await act(async () => {
            await result.current.handleCopy("test code");
        });

        expect(result.current.isCopied).toBe(true);

        await act(async () => {
            await result.current.handleCopy("test code");
        });

        expect(onCodeCopied).toHaveBeenCalledTimes(1);
    });

    it("should reset isCopied after 5 seconds", async () => {
        vi.useFakeTimers();

        const { result } = renderHook(() => useMarkdownContent());

        await act(async () => {
            await result.current.handleCopy("test code");
        });

        expect(result.current.isCopied).toBe(true);

        act(() => {
            vi.advanceTimersByTime(5000);
        });

        expect(result.current.isCopied).toBe(false);
    });
});
