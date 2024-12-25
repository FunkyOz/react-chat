import React from "react";
import { ChatProps } from "../../types";
import { ChatWrapper, ChatContent, ChatContainer } from "./styles/chat.styles";
import { useChat } from "./hooks/useChat";
import { ChatProvider } from "../../provider";
import useClassNames from "../../hooks/useClassNames";

export const Chat: React.FC<ChatProps> = ({
    children,
    className,
    classNames,
}) => {
    const { sidebar, messageInput, messages } = useChat(children);
    const classes = useClassNames({ className, classNames });

    return (
        <ChatProvider>
            <ChatWrapper className={classes?.base}>
                <ChatContent className={classes?.content}>
                    {sidebar}
                    <ChatContainer className={classes?.container}>
                        {messages}
                        {messageInput}
                    </ChatContainer>
                </ChatContent>
            </ChatWrapper>
        </ChatProvider>
    );
};

export default Chat;
