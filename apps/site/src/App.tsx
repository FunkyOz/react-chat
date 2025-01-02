import { useState, useEffect } from "react";
import {
    Chat,
    MessageInput,
    Messages,
    Sidebar,
    SidebarItem,
    UserMessage,
    AssistantMessage,
    AssistantLoading,
    MarkdownContent,
} from "@funkyoz/react-chat";
import {
    conversations,
    activeConversationIndex as defaultActiveIndex,
} from "./dummy/data";

import type { Conversation, Message } from "./dummy/data";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function App() {
    const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
    const [activeConversation, setActiveConversation] = useState(
        conversations[activeIndex]
    );
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setActiveConversation(conversations[activeIndex]);
    }, [activeIndex]);

    const handleConversationClick = (conversation: Conversation) => {
        const newIndex = conversations.findIndex(
            (conv) => conv.conversationId === conversation.conversationId
        );
        if (newIndex !== -1) {
            setActiveIndex(newIndex);
        }
    };

    const handleSend = async (message: string) => {
        setIsLoading(true);
        const userMessage: Message = {
            messageId: Date.now(),
            content: message,
            role: "user",
            createdAt: new Date(),
        };
        setActiveConversation((prev) => ({
            ...prev,
            messages: [...prev.messages, userMessage],
        }));
        await sleep(Math.random() * 1000 + 500);
        const assistantMessage: Message = {
            messageId: Date.now(),
            content: "Hello, how can I help you today?",
            role: "assistant",
            createdAt: new Date(),
        };
        setActiveConversation((prev) => ({
            ...prev,
            messages: [...prev.messages, assistantMessage],
        }));
        setIsLoading(false);
    };

    const [message, setMessage] = useState("");

    useEffect(() => {
        window.scrollTo({
            left: 0,
            top: document.body.scrollHeight,
            behavior: "instant",
        });
    }, []);

    return (
        <div className="w-screen flex flex-col bg-white overflow-hidden">
            <Chat>
                <Sidebar items={conversations}>
                    {(item: Conversation, key: number) => (
                        <SidebarItem
                            key={key}
                            onClick={() => handleConversationClick(item)}
                            isActive={
                                item.conversationId ===
                                activeConversation.conversationId
                            }
                        >
                            {item.title}
                        </SidebarItem>
                    )}
                </Sidebar>
                <div>Test</div>
                <Messages
                    items={activeConversation.messages}
                    isLoading={isLoading}
                    loadingContent={<AssistantLoading />}
                    headerContent={<div>Test</div>}
                >
                    {(message: Message) => (
                        <ChatMessage
                            key={message.messageId}
                            message={message}
                        />
                    )}
                </Messages>
                <MessageInput
                    value={message}
                    withAutoFocus
                    onSend={handleSend}
                    onChange={setMessage}
                    bottomContent={<div>{message}</div>}
                />
            </Chat>
        </div>
    );
}

export default App;

const ChatMessage = ({ message }: { message: Message }) => {
    if (message.role === "user") {
        return <UserMessage color="#000000">{message.content}</UserMessage>;
    }
    return (
        <AssistantMessage className="assistant-message truncate">
            <MarkdownContent content={message.content} />
        </AssistantMessage>
    );
};
