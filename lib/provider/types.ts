import { Size } from "../types";

export type ChatState = {
    isSidebarOpen: boolean;
    sidebarSize: Size;
    hasSidebar: boolean;
};

export type ChatAction =
    | { type: "TOGGLE_SIDEBAR" }
    | { type: "OPEN_SIDEBAR" }
    | { type: "CLOSE_SIDEBAR" };

export type ChatProviderContextType = {
    state: ChatState;
    dispatch: React.Dispatch<ChatAction>;
};
