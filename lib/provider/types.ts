export type ChatState = {
    isSidebarOpen: boolean;
};

export type ChatAction = { type: "TOGGLE_SIDEBAR" };

export type ChatProviderContextType = {
    state: ChatState;
    dispatch: React.Dispatch<ChatAction>;
};
