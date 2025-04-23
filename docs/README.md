# React Chat

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/FunkyOz/react-chat/tests.yml)
![NPM Downloads](https://img.shields.io/npm/dm/%40funkyoz%2Freact-chat)
![NPM Version](https://img.shields.io/npm/v/%40funkyoz%2Freact-chat)
![NPM License](https://img.shields.io/npm/l/%40funkyoz%2Freact-chat)

A modern, customizable React chat UI library for building chat interfaces in your web applications. This library provides a set of components that can be used to create beautiful chat experiences with minimal effort.

## Features

- 📱 Fully responsive design that works on mobile and desktop
- 🎨 Highly customizable with support for Tailwind CSS
- 🔧 Flexible component architecture
- 📝 Markdown support for rich message content
- 📋 Code block highlighting and copy functionality
- 🔄 Loading states for messages
- 🧩 Sidebar with toggle functionality

## Requirements

- Node.js >=18
- React ^18.3.1
- react-markdown ^9.0.1
- react-syntax-highlighter ^15.6.1
- Tailwind CSS ^3.0.0 or ^4.0.0

## Installation

### npm

```bash
npm install @funkyoz/react-chat
```

### yarn

```bash
yarn add @funkyoz/react-chat
```

### pnpm

```bash
pnpm add @funkyoz/react-chat
```

## Basic Usage

```jsx
import React, { useState } from "react";
import {
    Chat,
    Messages,
    UserMessage,
    AssistantMessage,
    MessageInput,
} from "@funkyoz/react-chat";

function App() {
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSend = async (message) => {
        // Add user message
        setMessages([...messages, { role: "user", content: message }]);

        // Set loading state
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setMessages([
                ...messages,
                { role: "user", content: message },
                { role: "assistant", content: `You said: ${message}` },
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
                        <AssistantMessage>{message.content}</AssistantMessage>
                    )
                }
            </Messages>
            <MessageInput onSend={handleSend} placeholder="Type a message..." />
        </Chat>
    );
}
```

## Main Components

- `Chat`: The main container component
- `Messages`: Container for chat messages
- `UserMessage`: Component for user messages
- `AssistantMessage`: Component for assistant/bot messages
- `AssistantLoading`: Loading indicator for assistant responses
- `MessageInput`: Input field for sending messages
- `Sidebar`: Optional sidebar for chat navigation
- `MarkdownContent`: Rich text rendering with markdown support

## Customization

All components accept `className` and `classNames` props for easy styling:

```jsx
<Chat
    className="my-custom-chat"
    classNames={{
        base: "chat-base-class",
        container: "chat-container-class",
        content: "chat-content-class",
    }}
>
    {/* Chat content */}
</Chat>
```

## Components API

For detailed documentation on all components, including props and usage examples, see the [Components API Reference](./components-api.md).

## Examples

For more detailed examples and advanced usage, check out the [examples](./examples) directory.
