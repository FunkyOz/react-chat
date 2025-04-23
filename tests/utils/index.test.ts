import { describe, expect, it } from "vitest";
import { Size } from "../../lib/types";
import { getMessagesPaddingLeftClass, getSidebarWidthClass } from "../../lib/utils";


describe("getSidebarWidth", () => {
    it.each([
        ["sm", "w-56"],
        ["md", "w-64"],
        ["lg", "w-72"],
        ["xl", "w-80"],
    ])("should return the correct width for size %s", (size, expected) => {
        const width = getSidebarWidthClass(size as Size);
        expect(width).toBe(expected);
    });
});

describe("getMessagesPaddingLeftClass", () => {
    it.each([
        ["sm", "pl-60"],
        ["md", "pl-68"],
        ["lg", "pl-76"],
        ["xl", "pl-84"],
    ])("should return the correct padding-left for size %s", (size, expected) => {
        const paddingLeft = getMessagesPaddingLeftClass(size as Size);
        expect(paddingLeft).toBe(expected);
    });
});
