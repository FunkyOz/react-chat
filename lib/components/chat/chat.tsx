import React from "react";
import { ChatProps } from "../../types";
import {
    ChatWrapper,
    ChatContent,
    ChatContainer,
    ChatLayer,
} from "./styles/chat.styles";
import { useChat } from "./hooks/useChat";
import { ChatProvider, useChatProvider } from "../../provider";
import useClassNames from "../../hooks/useClassNames";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useSidebarHandler } from "../sidebar/hooks/useSidebarHandler";

export const Chat: React.FC<ChatProps> = ({
    children,
    className,
    classNames,
}) => {
    return (
        <ChatProvider>
            <ChatHelper className={className} classNames={classNames}>
                {children}
            </ChatHelper>
        </ChatProvider>
    );
};

export default Chat;

const ChatHelper: React.FC<ChatProps> = ({
    children,
    className,
    classNames,
}) => {
    const { sidebar, messageInput, messages, others } = useChat(children);
    const classes = useClassNames({ className, classNames });
    const isMobile = useMediaQuery("(max-width: 768px)");
    const { handleClose } = useSidebarHandler();
    const {
        state: { isSidebarOpen },
    } = useChatProvider();

    return (
        <ChatWrapper className={classes?.base}>
            <ChatContent className={classes?.content}>
                {sidebar}
                {isMobile && isSidebarOpen && (
                    <ChatLayer onClick={handleClose} />
                )}
                <ChatContainer className={classes?.container}>
                    {messages}
                    {others}
                    {messageInput}
                </ChatContainer>
            </ChatContent>
        </ChatWrapper>
    );
};
