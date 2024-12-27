import { describe, it, expect } from "vitest";
import { chatReducer, initialState } from "../../lib/provider/reducer";
import { ChatAction } from "../../lib/provider/types";

describe("chatReducer", () => {
    it("should return the initial state", () => {
        const action = { type: "UNKNOWN_ACTION" } as unknown as ChatAction;
        const state = chatReducer(initialState, action);
        expect(state).toEqual(initialState);
    });

    it("should handle TOGGLE_SIDEBAR action", () => {
        const action = { type: "TOGGLE_SIDEBAR" } as ChatAction;
        const state = chatReducer(initialState, action);
        expect(state.isSidebarOpen).toBe(false);
    });

    it("should toggle isSidebarOpen state", () => {
        const action = { type: "TOGGLE_SIDEBAR" } as ChatAction;
        let state = chatReducer(initialState, action);
        expect(state.isSidebarOpen).toBe(false);

        state = chatReducer(state, action);
        expect(state.isSidebarOpen).toBe(true);
    });
});
