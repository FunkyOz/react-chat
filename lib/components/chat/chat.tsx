import { ChatProps } from "../../types";
import { ChatWrapper, ChatContent, ChatContainer } from "./styles/chat.styles";
import { useChat } from "./hooks/useChat";
import { ChatProvider } from "../../provider";

export const Chat = ({ withAutoFocus, children, assistantIcon }: ChatProps) => {
    const { sidebar, messageInput, messages } = useChat(children);

    return (
        <ChatProvider
            withAutoFocus={withAutoFocus}
            assistantIcon={assistantIcon}
        >
            <ChatWrapper>
                <ChatContent>
                    {sidebar}
                    <ChatContainer>
                        {messages}
                        {messageInput}
                    </ChatContainer>
                </ChatContent>
            </ChatWrapper>
        </ChatProvider>
    );
};

export default Chat;
