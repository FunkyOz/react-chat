# Chat with Sidebar Example

This example demonstrates a chat interface with a sidebar for navigation between different conversations.

## Code

```jsx
import React, { useState } from "react";
import {
    Chat,
    Messages,
    UserMessage,
    AssistantMessage,
    MessageInput,
    Sidebar,
    SidebarItem,
    MarkdownContent,
    AssistantLoading,
} from "@funkyoz/react-chat";

function ChatWithSidebar() {
    // Sample conversation data
    const conversations = [
        { id: 1, title: "Conversation 1", messages: [] },
        { id: 2, title: "Conversation 2", messages: [] },
        { id: 3, title: "Conversation 3", messages: [] },
    ];

    const [activeConversation, setActiveConversation] = useState(1);
    const [chatMessages, setChatMessages] = useState({
        1: [],
        2: [{ role: "assistant", content: "Welcome to conversation 2!" }],
        3: [{ role: "assistant", content: "Welcome to conversation 3!" }],
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSend = (message) => {
        // Add user message
        const newMessages = {
            ...chatMessages,
            [activeConversation]: [
                ...chatMessages[activeConversation],
                { role: "user", content: message },
            ],
        };
        setChatMessages(newMessages);

        // Set loading state
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setChatMessages({
                ...newMessages,
                [activeConversation]: [
                    ...newMessages[activeConversation],
                    {
                        role: "assistant",
                        content: `Response to: "${message}"\n\n**Conversation ${activeConversation}**`,
                    },
                ],
            });
            setIsLoading(false);
        }, 1000);
    };

    return (
        <Chat sidebarSize="md">
            <Sidebar
                items={conversations}
                withToggle={true}
                headerContent={
                    <div className="p-3 font-bold">My Conversations</div>
                }
            >
                {(conversation) => (
                    <SidebarItem
                        key={conversation.id}
                        isActive={activeConversation === conversation.id}
                        onClick={() => setActiveConversation(conversation.id)}
                    >
                        {conversation.title}
                    </SidebarItem>
                )}
            </Sidebar>

            <Messages
                isLoading={isLoading}
                items={chatMessages[activeConversation]}
                headerContent={
                    <div className="p-3 border-b">
                        {
                            conversations.find(
                                (c) => c.id === activeConversation
                            )?.title
                        }
                    </div>
                }
                loadingContent={<AssistantLoading />}
            >
                {(message) =>
                    message.role === "user" ? (
                        <UserMessage>{message.content}</UserMessage>
                    ) : (
                        <AssistantMessage>
                            <MarkdownContent content={message.content} />
                        </AssistantMessage>
                    )
                }
            </Messages>

            <MessageInput
                onSend={handleSend}
                placeholder="Type a message..."
                withAutoFocus
            />
        </Chat>
    );
}

export default ChatWithSidebar;
```

## Features Demonstrated

- Chat interface with responsive sidebar
- Sidebar with toggle functionality for mobile
- Multiple conversation management
- Active conversation state
- Sidebar items with active state
- Messages with header content
- Loading state with custom loading indicator
- Customizable sidebar size

## Implementation Details

1. **Conversation Management**:

    - Uses state to track the active conversation ID
    - Stores messages for each conversation in a nested object
    - Switches between conversations via sidebar clicks

2. **Sidebar Configuration**:

    - Includes a toggle button for mobile view
    - Shows a custom header with conversation list title
    - Renders a list of conversations as clickable items
    - Highlights the active conversation

3. **Messages Display**:
    - Shows a header with the current conversation title
    - Displays messages from the active conversation
    - Shows a loading indicator when waiting for a response
    - Renders markdown content for assistant messages
