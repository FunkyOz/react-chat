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
        default:
            return state;
    }
};
