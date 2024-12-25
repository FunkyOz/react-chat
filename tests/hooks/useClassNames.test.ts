import { renderHook } from "@testing-library/react";
import useClassNames from "../../lib/hooks/useClassNames";
import { describe, it, expect } from "vitest";

describe("useClassNames", () => {
    it("should return classNames with merged base when className is provided", () => {
        const { result } = renderHook(() =>
            useClassNames({
                className: "additional-class",
                classNames: { base: "base-class" },
            })
        );

        expect(result.current.base).toBe("base-class additional-class");
    });

    it("should return classNames with base as undefined when both className and classNames.base are undefined", () => {
        const { result } = renderHook(() =>
            useClassNames({
                className: undefined,
                classNames: {},
            })
        );

        expect(result.current.base).toBeUndefined();
    });

    it("should return classNames with only className when classNames.base is undefined", () => {
        const { result } = renderHook(() =>
            useClassNames({
                className: "only-class",
                classNames: {},
            })
        );

        expect(result.current.base).toBe("only-class");
    });

    it("should return classNames with only base when className is undefined", () => {
        const { result } = renderHook(() =>
            useClassNames({
                className: undefined,
                classNames: { base: "only-base" },
            })
        );

        expect(result.current.base).toBe("only-base");
    });
});
