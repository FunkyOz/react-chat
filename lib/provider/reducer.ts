import { ChatState, ChatAction } from "./types";

export const initialState: ChatState = {
    isSidebarOpen: true,
};

export const chatReducer = (
    state: ChatState,
    action: ChatAction
): ChatState => {
    switch (action.type) {
        case "TOGGLE_SIDEBAR":
            return {
                ...state,
                isSidebarOpen: !state.isSidebarOpen,
            };
        case "OPEN_SIDEBAR":
            return {
                ...state,
                isSidebarOpen: true,
            };
        case "CLOSE_SIDEBAR":
            return {
                ...state,
                isSidebarOpen: false,
            };
        default:
            return state;
    }
};
