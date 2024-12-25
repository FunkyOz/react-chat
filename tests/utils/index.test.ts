import { describe, it, expect } from "vitest";
import { mRound } from "../../lib/utils";

describe("mRound", () => {
    it("should return the same number when multiple is 0", () => {
        expect(mRound(5.67, 0)).toBe(5.67);
        expect(mRound(10.123, 0)).toBe(10.123);
    });

    it("should round to the nearest multiple of 0.5", () => {
        expect(mRound(5.1, 0.5)).toBe(5);
        expect(mRound(5.3, 0.5)).toBe(5.5);
        expect(mRound(5.7, 0.5)).toBe(5.5);
        expect(mRound(5.8, 0.5)).toBe(6);
    });

    it("should round to the nearest multiple of 2", () => {
        expect(mRound(5, 2)).toBe(6);
        expect(mRound(7, 2)).toBe(8);
        expect(mRound(3, 2)).toBe(4);
        expect(mRound(4, 2)).toBe(4);
    });

    it("should handle negative numbers correctly", () => {
        expect(mRound(-5.3, 0.5)).toBe(-5.5);
        expect(mRound(-5.7, 0.5)).toBe(-5.5);
        expect(mRound(-5.8, 0.5)).toBe(-6);
    });

    it("should handle decimal multiples correctly", () => {
        expect(mRound(1.23, 0.1)).toBeCloseTo(1.2, 5);
        expect(mRound(1.27, 0.1)).toBeCloseTo(1.3, 5);
        expect(mRound(1.55, 0.25)).toBeCloseTo(1.5, 5);
        expect(mRound(1.65, 0.25)).toBeCloseTo(1.75, 5);
    });
});
