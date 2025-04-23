# Basic Chat Example

This example demonstrates a simple chat interface with user and assistant messages.

## Code

```jsx
import React, { useState } from "react";
import {
    Chat,
    Messages,
    UserMessage,
    AssistantMessage,
    MessageInput,
    MarkdownContent,
} from "@funkyoz/react-chat";

function BasicChat() {
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSend = (message) => {
        // Add user message
        const newMessages = [...messages, { role: "user", content: message }];
        setMessages(newMessages);

        // Set loading state
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setMessages([
                ...newMessages,
                {
                    role: "assistant",
                    content: `This is a response to your message: "${message}"\n\nHere's some **markdown** content:\n\n\`\`\`javascript\nconst hello = "world";\nconsole.log(hello);\n\`\`\``,
                },
            ]);
            setIsLoading(false);
        }, 1000);
    };

    return (
        <Chat>
            <Messages isLoading={isLoading} items={messages}>
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

export default BasicChat;
```

## Features Demonstrated

- Basic chat layout with the `Chat` component
- Rendering messages with the `Messages` component
- Using `UserMessage` and `AssistantMessage` components
- Handling message input with `MessageInput`
- Loading state for assistant responses
- Markdown content rendering with `MarkdownContent`
- Auto-focus on the input field

## Implementation Details

1. **State Management**:

    - `messages` state array stores the chat history
    - `isLoading` state manages the loading indicator

2. **Message Handling**:

    - The `handleSend` function adds user messages to the chat
    - Simulates an API delay with setTimeout
    - Adds an assistant response with markdown formatting

3. **Rendering Messages**:
    - Uses the render prop pattern with `Messages` component
    - Conditionally renders either `UserMessage` or `AssistantMessage` based on role
    - Uses `MarkdownContent` for rich text rendering of assistant messages
      </rewritten_file>
