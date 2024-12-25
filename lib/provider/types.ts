export type ChatState = {
    isSidebarOpen: boolean;
    isDarkMode: boolean;
    withAutoFocus: boolean;
    assistantIcon: React.ReactNode;
};

export type ChatAction =
    | { type: "TOGGLE_SIDEBAR" }
    | { type: "TOGGLE_DARK_MODE" }
    | { type: "SET_SIDEBAR_OPEN"; payload: boolean }
    | { type: "SET_DARK_MODE"; payload: boolean }
    | { type: "SET_AUTO_FOCUS"; payload: boolean };

export type ChatProviderContextType = {
    state: ChatState;
    dispatch: React.Dispatch<ChatAction>;
};
