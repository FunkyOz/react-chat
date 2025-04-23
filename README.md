# React Chat

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/FunkyOz/react-chat/tests.yml)
![NPM Downloads](https://img.shields.io/npm/dm/%40funkyoz%2Freact-chat)
![NPM Version](https://img.shields.io/npm/v/%40funkyoz%2Freact-chat)
![NPM License](https://img.shields.io/npm/l/%40funkyoz%2Freact-chat)

A modern, customizable React chat component library that provides a complete chat interface with support for messages, sidebars, and custom styling.

## Requirements

- React 18 or higher
- Styled Components 6 or higher
- React Markdown 9 or higher
- React Syntax Highlighter 15 or higher

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

### Step 1: Import the Components
```tsx
import { Chat, Messages, MessageInput, Sidebar } from '@funkyoz/react-chat';
```

### Step 2: Create a Basic Chat Interface
```tsx
const MyChat = () => (
  <Chat>
    <Messages />
    <MessageInput onSend={(message) => console.log('Message sent:', message)} />
  </Chat>
);
```

### Step 3: Add a Sidebar
```tsx
const MyChat = () => (
  <Chat>
    <Sidebar headerContent={<h2>Conversations</h2>}>
      <SidebarItem onClick={() => handleConversationSelect(1)}>
        Conversation 1
      </SidebarItem>
      <SidebarItem onClick={() => handleConversationSelect(2)}>
        Conversation 2
      </SidebarItem>
    </Sidebar>
    <Messages />
    <MessageInput onSend={(message) => console.log('Message sent:', message)} />
  </Chat>
);
```

### Step 4: Display Messages
```tsx
const MyChat = () => {
  const [messages, setMessages] = useState([
    { id: 1, type: 'user', content: 'Hello!' },
    { id: 2, type: 'assistant', content: 'Hi there! How can I help you today?' }
  ]);

  const handleSend = (message) => {
    setMessages(prev => [...prev, { id: prev.length + 1, type: 'user', content: message }]);
  };

  return (
    <Chat>
      <Sidebar headerContent={<h2>Conversations</h2>} />
      <Messages>
        {messages.map((msg, index) => (
          msg.type === 'user' ? (
            <UserMessage key={msg.id}>
              {msg.content}
            </UserMessage>
          ) : (
            <AssistantMessage key={msg.id}>
              {msg.content}
            </AssistantMessage>
          )
        ))}
      </Messages>
      <MessageInput onSend={handleSend} />
    </Chat>
  );
};
```

## Components API

### Chat

The root component that provides context and layout for the chat interface.

```tsx
<Chat className="custom-chat">
  {/* Child components */}
</Chat>
```

**Props:**
- `children`: ReactNode - The child components (Sidebar, Messages, MessageInput)
- `className`: string - Custom class for the chat container
- `classNames`: object - Object containing class names for different parts
  - `base`: string - Class for the root element
  - `content`: string - Class for the content container
  - `container`: string - Class for the inner container

### Sidebar

Component for displaying a collapsible sidebar.

```tsx
<Sidebar 
  headerContent={<h2>Conversations</h2>}
  withToggle={true}
  size={300}
>
  <SidebarItem>Item 1</SidebarItem>
  <SidebarItem>Item 2</SidebarItem>
</Sidebar>
```

**Props:**
- `items`: array - Items to display in the sidebar
- `children`: ReactNode or function - SidebarItem components or render function
- `headerContent`: ReactNode - Content displayed in the sidebar header
- `withToggle`: boolean - Whether to show the toggle button (default: true)
- `toggleIcon`: ReactNode - Custom icon for the toggle button
- `size`: number - Width of the sidebar in pixels
- `className`: string - Custom class for the sidebar
- `classNames`: object - Object containing class names for different parts

### SidebarItem

Individual item in the sidebar.

```tsx
<SidebarItem onClick={handleClick} isActive={isSelected}>
  Conversation name
</SidebarItem>
```

**Props:**
- `children`: ReactNode - The content of the sidebar item
- `onClick`: function - Callback function when item is clicked
- `isActive`: boolean - Whether the item is currently active
- `className`: string - Custom class for the item
- `classNames`: object - Object containing class names for different parts

### Messages

Container for chat messages.

```tsx
<Messages 
  headerContent={<h2>Current Conversation</h2>}
  isLoading={isLoadingMessages}
  loadingContent={<AssistantLoading />}
>
  {/* Message components */}
</Messages>
```

**Props:**
- `children`: ReactNode or function - User/Assistant message components
- `items`: array - Array of message data to render
- `loadingContent`: ReactNode - Content shown when isLoading is true
- `headerContent`: ReactNode - Content displayed at the top of messages
- `isLoading`: boolean - Whether messages are loading
- `className`: string - Custom class for the messages container
- `classNames`: object - Object containing class names for different parts

### UserMessage

Component for displaying user messages.

```tsx
<UserMessage 
  icon={<UserIcon />}
  color="#4f46e5"
>
  Hello, how can you help me today?
</UserMessage>
```

**Props:**
- `children`: ReactNode - Content of the message
- `endContent`: ReactNode - Content displayed at the end of the message
- `icon`: ReactNode - Custom icon for the user message
- `color`: string - Background color of the message bubble
- `className`: string - Custom class for the message
- `classNames`: object - Object containing class names for different parts

### AssistantMessage

Component for displaying assistant messages.

```tsx
<AssistantMessage 
  icon={<CustomAssistantIcon />}
>
  <MarkdownContent content="I can help you with **many tasks**." />
</AssistantMessage>
```

**Props:**
- `children`: ReactNode - Content of the message
- `endContent`: ReactNode - Content displayed at the end of the message
- `icon`: ReactNode - Custom icon for the assistant message (default: AssistantIcon)
- `className`: string - Custom class for the message
- `classNames`: object - Object containing class names for different parts

### MessageInput

Component for typing and sending messages.

```tsx
<MessageInput 
  placeholder="Type your message..."
  onSend={handleSendMessage}
  onChange={handleMessageChange}
  withAutoFocus={true}
  bottomContent={<div>Typing suggestions</div>}
/>
```

**Props:**
- `withAutoFocus`: boolean - Whether to automatically focus the input (default: false)
- `onSend`: function - Callback when a message is sent
- `onChange`: function - Callback when the input value changes
- `placeholder`: string - Placeholder text (default: "Type a message...")
- `sendIcon`: ReactNode - Custom icon for the send button
- `value`: string - Controlled input value
- `className`: string - Custom class for the input
- `classNames`: object - Object containing class names for different parts
- `bottomContent`: ReactNode - Content displayed below the input

### MarkdownContent

Component for rendering markdown content with syntax highlighting.

```tsx
<MarkdownContent 
  content="# Title\nThis is **bold** text\n```js\nconsole.log('hello');\n```" 
  onCodeCopied={(code) => console.log('Copied code:', code)}
/>
```

**Props:**
- `content`: string - Markdown content to render
- `className`: string - Custom class for the container
- `classNames`: object - Object containing class names for different parts
- `onCodeCopied`: function - Callback when code is copied

### AssistantLoading

Component for displaying a loading indicator for assistant messages.

```tsx
<AssistantLoading />
```

## Advanced Examples

### Using Chat with Sidebar and Toggle

```tsx
const ChatWithToggle = () => (
  <Chat>
    <Sidebar 
      withToggle={true}
      headerContent={<h2>Conversations</h2>}
    >
      <SidebarItem>Conversation 1</SidebarItem>
      <SidebarItem>Conversation 2</SidebarItem>
    </Sidebar>
    <Messages />
    <MessageInput onSend={(message) => console.log(message)} />
  </Chat>
);
```

### Using Chat with Custom Styling

```tsx
const StyledChat = () => (
  <Chat 
    classNames={{
      base: "my-chat",
      content: "chat-content",
      container: "chat-container"
    }}
  >
    <Sidebar 
      classNames={{
        base: "my-sidebar",
        header: "sidebar-header",
        content: "sidebar-content"
      }}
    />
    <Messages
      classNames={{
        base: "messages-list",
        header: "messages-header"
      }}
    />
    <MessageInput 
      classNames={{
        base: "message-input-wrapper",
        container: "input-container",
        textarea: "custom-textarea",
        sendButton: "custom-send-btn"
      }}
    />
  </Chat>
);
```

### Chat with Markdown Support

```tsx
const MarkdownChat = () => {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      type: 'assistant', 
      content: '# Welcome\nI can help you with:\n- Answering questions\n- Providing information\n\n```js\n// Example code\nconst hello = "world";\n```' 
    }
  ]);

  return (
    <Chat>
      <Messages>
        {messages.map((msg) => (
          msg.type === 'assistant' && (
            <AssistantMessage key={msg.id}>
              <MarkdownContent 
                content={msg.content}
                onCodeCopied={(code) => console.log('Copied:', code)}
              />
            </AssistantMessage>
          )
        ))}
      </Messages>
      <MessageInput />
    </Chat>
  );
};
```

## Mobile Responsiveness

The library is fully responsive and adapts to mobile screens. On smaller screens (width <= 768px):

- The sidebar becomes collapsible and can be toggled
- Layout adjusts for touch interactions
- Messages and inputs resize appropriately

## License

MIT