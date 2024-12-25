import { AssistantIcon } from "../components/icons/assistant-icon";
import { ChatState, ChatAction } from "./types";

export const initialState: ChatState = {
    isSidebarOpen: true,
    isDarkMode: false,
    withAutoFocus: false,
    assistantIcon: <AssistantIcon />,
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
        case "TOGGLE_DARK_MODE":
            return {
                ...state,
                isDarkMode: !state.isDarkMode,
            };
        case "SET_SIDEBAR_OPEN":
            return {
                ...state,
                isSidebarOpen: action.payload,
            };
        case "SET_DARK_MODE":
            return {
                ...state,
                isDarkMode: action.payload,
            };
        case "SET_AUTO_FOCUS":
            return {
                ...state,
                withAutoFocus: action.payload,
            };
        default:
            return state;
    }
};
