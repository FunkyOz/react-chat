import React, {
    createContext,
    useContext,
    useReducer,
    ReactNode,
    useEffect,
} from "react";
import { ChatProviderContextType } from "./types";
import { chatReducer, initialState } from "./reducer";
import { AssistantIcon } from "../components/icons/assistant-icon";

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
    withAutoFocus?: boolean;
    assistantIcon?: React.ReactNode;
};

export const ChatProvider: React.FC<ChatProviderProps> = ({
    children,
    withAutoFocus,
    assistantIcon,
}) => {
    const initialStateProps: typeof initialState = {
        ...initialState,
        withAutoFocus: withAutoFocus ?? false,
        assistantIcon: assistantIcon ?? <AssistantIcon />,
    };
    const [state, dispatch] = useReducer(chatReducer, initialStateProps);

    useEffect(() => {
        dispatch({ type: "SET_AUTO_FOCUS", payload: withAutoFocus ?? false });
    }, [withAutoFocus]);

    return (
        <ChatContext.Provider value={{ state, dispatch }}>
            {children}
        </ChatContext.Provider>
    );
};
