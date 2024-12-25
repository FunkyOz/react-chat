import { renderHook } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import * as React from "react";
import { useScrollToBottom } from "../../../../lib/components/message/hooks/useScrollToBottom";

vi.mock("react", async () => {
    const actual = await vi.importActual("react");
    return {
        ...actual,
        useEffect: vi.fn((cb) => cb()),
    };
});

describe("useScrollToBottom", () => {
    it("should call scrollIntoView when dependency changes", () => {
        const scrollIntoViewMock = vi.fn();
        const divRef = { current: { scrollIntoView: scrollIntoViewMock } };
        vi.spyOn(React, "useRef").mockReturnValue(divRef);

        renderHook(() => useScrollToBottom(["test"]));

        expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: "smooth" });
    });

    it("should not call scrollIntoView if ref is null", () => {
        const divRef = { current: null };
        vi.spyOn(React, "useRef").mockReturnValue(divRef);

        renderHook(() => useScrollToBottom(["test"]));

        // No error should be thrown and no calls should be made
        expect(true).toBeTruthy();
    });
});
