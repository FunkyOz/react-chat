import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { ChatProviderContextType } from "./types";
import { chatReducer, initialState } from "./reducer";
import { useMediaQuery } from "../hooks/useMediaQuery";

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
};

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const [state, dispatch] = useReducer(chatReducer, {
        ...initialState,
        isSidebarOpen: !isMobile,
    });

    return (
        <ChatContext.Provider value={{ state, dispatch }}>
            {children}
        </ChatContext.Provider>
    );
};
