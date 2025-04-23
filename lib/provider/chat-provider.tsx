import React, { createContext, ReactNode, useContext, useReducer } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { Size } from "../types";
import { chatReducer, initialState } from "./reducer";
import { ChatProviderContextType } from "./types";

const ChatContext = createContext<ChatProviderContextType | undefined>(
    undefined
);

export const useChatProvider = () => {
    const context = useContext(ChatContext);
    if (!context) {
        throw new Error("useChatProvider must be used within a ChatProvider");
    }
    return context;
};

type ChatProviderProps = {
    children: ReactNode;
    sidebarSize?: Size;
    hasSidebar?: boolean;
};

export const ChatProvider: React.FC<ChatProviderProps> = ({
    children,
    sidebarSize = "md",
    hasSidebar = true,
}) => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const [state, dispatch] = useReducer(chatReducer, {
        ...initialState,
        sidebarSize,
        isSidebarOpen: !isMobile,
        hasSidebar,
    });

    return (
        <ChatContext.Provider value={{ state, dispatch }}>
            {children}
        </ChatContext.Provider>
    );
};
