import React, { ReactNode } from "react";
import useClassNames from "../../hooks/useClassNames";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { ChatProvider, useChatProvider } from "../../provider";
import { ChatProps } from "../../types";
import { useSidebarHandler } from "../sidebar/hooks/useSidebarHandler";
import {
    ChatContainer,
    ChatContent,
    ChatLayer,
    ChatWrapper,
} from "./components";
import { useChat } from "./hooks/useChat";

export const Chat: React.FC<ChatProps> = (props) => {
    const { children, sidebarSize, classNames, className } = props;
    const { sidebar, messageInput, messages, others } = useChat({
        children,
    });

    return (
        <ChatProvider sidebarSize={sidebarSize} hasSidebar={Boolean(sidebar)}>
            <ChatHelper
                className={className}
                classNames={classNames}
                sidebar={sidebar}
                messageInput={messageInput}
                messages={messages}
                others={others}
            />
        </ChatProvider>
    );
};

export default Chat;

type ChatHelperProps = Pick<ChatProps, "className" | "classNames"> & {
    sidebar?: ReactNode;
    messageInput?: ReactNode;
    messages?: ReactNode;
    others?: ReactNode;
};

const ChatHelper: React.FC<ChatHelperProps> = ({
    sidebar,
    messageInput,
    messages,
    others,
    className,
    classNames,
}) => {
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
