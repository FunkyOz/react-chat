# React Chat

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/FunkyOz/react-chat/tests.yml)

![NPM Downloads](https://img.shields.io/npm/d18m/%40funkyoz%2Freact-chat)
![NPM Version](https://img.shields.io/npm/v/%40funkyoz%2Freact-chat)
![NPM License](https://img.shields.io/npm/l/%40funkyoz%2Freact-chat)

A modern, customizable React chat component library that provides a complete chat interface with support for messages, sidebars, and custom styling.

## Requirements

- React 18 or higher
- Styled Components 6 or higher
- React Markdown 9 or higher
- React Syntax Highlighter 15 or higher

## Installation

```bash
npm install react-chat
# or
yarn add react-chat
# or
pnpm add react-chat
```

## Basic Usage

### Step 1: Import the Components
```tsx
import { Chat, Messages, MessageInput, Sidebar } from 'react-chat';
```

### Step 2: Attach the Messages Component
```tsx
const MyChat = () => (
  <Chat>
    <Messages />
  </Chat>
);
```

### Step 3: Attach the MessageInput Component
```tsx
const MyChat = () => (
  <Chat>
    <Messages />
    <MessageInput />
  </Chat>
);
```

### Step 4: Attach the Sidebar Component
```tsx
const MyChat = () => (
  <Chat>
    <Sidebar />
    <Messages />
    <MessageInput />
  </Chat>
);
```

## Advanced Examples

### Using Chat with Sidebar and Toggle
```tsx
const ChatWithToggle = () => (
  <Chat>
    <Sidebar withToggle={true} />
    <Messages />
    <MessageInput />
  </Chat>
);
```

### Using Chat with Sidebar (No Toggle)
```tsx
const ChatWithoutToggle = () => (
  <Chat>
    <Sidebar withToggle={false} />
    <Messages />
    <MessageInput />
  </Chat>
);
```

### Using Chat without Sidebar
```tsx
const BasicChat = () => (
  <Chat>
    <Messages />
    <MessageInput />
  </Chat>
);
```

### Using Chat with Custom Icons
```tsx
const CustomIconChat = () => (
  <Chat
    assistantIcon={<img src="/custom-assistant-icon.png" alt="Assistant" />}
  >
    <Sidebar />
    <Messages />
    <MessageInput />
  </Chat>
);
```
