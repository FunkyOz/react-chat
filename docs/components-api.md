# Components API Reference

This document provides detailed information about each component in the React Chat library, including their props and usage.

## Table of Contents

- [Chat](#chat)
- [Messages](#messages)
- [UserMessage](#usermessage)
- [AssistantMessage](#assistantmessage)
- [AssistantLoading](#assistantloading)
- [MessageInput](#messageinput)
- [Sidebar](#sidebar)
- [SidebarItem](#sidebaritem)
- [MarkdownContent](#markdowncontent)

## Chat

The main container component for the entire chat interface.

### Props

| Prop                   | Type                           | Default | Description                                |
| ---------------------- | ------------------------------ | ------- | ------------------------------------------ |
| `children`             | `ReactNode`                    | -       | Child components to render inside the chat |
| `className`            | `string`                       | -       | CSS class for the root element             |
| `classNames`           | `object`                       | -       | Object of CSS classes for different parts  |
| `classNames.base`      | `string`                       | -       | CSS class for the base wrapper element     |
| `classNames.content`   | `string`                       | -       | CSS class for the content area             |
| `classNames.container` | `string`                       | -       | CSS class for the container element        |
| `sidebarSize`          | `"sm" \| "md" \| "lg" \| "xl"` | `"md"`  | Control the width of the sidebar           |

### Example

```jsx
<Chat
    className="my-chat"
    sidebarSize="lg"
    classNames={{
        base: "chat-wrapper",
        content: "chat-content",
        container: "chat-container",
    }}
>
    {/* Chat components */}
</Chat>
```

## Messages

Container for displaying a list of chat messages.

### Props

| Prop                | Type                                                 | Default | Description                               |
| ------------------- | ---------------------------------------------------- | ------- | ----------------------------------------- |
| `children`          | `ReactNode \| ((item: T, key: number) => ReactNode)` | -       | Content or render function for messages   |
| `items`             | `T[]`                                                | -       | Array of message items to render          |
| `isLoading`         | `boolean`                                            | `false` | Whether to show loading state             |
| `loadingContent`    | `ReactNode`                                          | -       | Content to render while loading           |
| `headerContent`     | `ReactNode`                                          | -       | Content to render at the top              |
| `className`         | `string`                                             | -       | CSS class for the root element            |
| `classNames`        | `object`                                             | -       | Object of CSS classes for different parts |
| `classNames.base`   | `string`                                             | -       | CSS class for the base wrapper element    |
| `classNames.header` | `string`                                             | -       | CSS class for the header area             |

### Example

```jsx
<Messages
    isLoading={isLoading}
    items={messages}
    headerContent={<div>Chat Title</div>}
    loadingContent={<AssistantLoading />}
>
    {(message) =>
        message.role === "user" ? (
            <UserMessage>{message.content}</UserMessage>
        ) : (
            <AssistantMessage>{message.content}</AssistantMessage>
        )
    }
</Messages>
```

## UserMessage

Component for displaying user messages.

### Props

| Prop                 | Type        | Default | Description                               |
| -------------------- | ----------- | ------- | ----------------------------------------- |
| `children`           | `ReactNode` | -       | Message content                           |
| `endContent`         | `ReactNode` | -       | Content to display at the end             |
| `className`          | `string`    | -       | CSS class for the root element            |
| `icon`               | `ReactNode` | -       | Custom icon for the message               |
| `color`              | `string`    | -       | Color of the user message                 |
| `classNames`         | `object`    | -       | Object of CSS classes for different parts |
| `classNames.base`    | `string`    | -       | CSS class for the base wrapper element    |
| `classNames.content` | `string`    | -       | CSS class for the content area            |
| `classNames.icon`    | `string`    | -       | CSS class for the icon                    |

### Example

```jsx
<UserMessage endContent={<span>12:30</span>} color="blue">
    Hello there!
</UserMessage>
```

## AssistantMessage

Component for displaying assistant/bot messages.

### Props

| Prop                 | Type        | Default | Description                               |
| -------------------- | ----------- | ------- | ----------------------------------------- |
| `children`           | `ReactNode` | -       | Message content                           |
| `endContent`         | `ReactNode` | -       | Content to display at the end             |
| `className`          | `string`    | -       | CSS class for the root element            |
| `icon`               | `ReactNode` | -       | Custom icon for the message               |
| `classNames`         | `object`    | -       | Object of CSS classes for different parts |
| `classNames.base`    | `string`    | -       | CSS class for the base wrapper element    |
| `classNames.content` | `string`    | -       | CSS class for the content area            |
| `classNames.icon`    | `string`    | -       | CSS class for the icon                    |

### Example

```jsx
<AssistantMessage endContent={<span>12:31</span>} icon={<CustomIcon />}>
    How can I help you today?
</AssistantMessage>
```

## AssistantLoading

Component for displaying a loading indicator for the assistant.

### Props

| Prop                     | Type        | Default | Description                               |
| ------------------------ | ----------- | ------- | ----------------------------------------- |
| `icon`                   | `ReactNode` | -       | Custom icon for the loading indicator     |
| `className`              | `string`    | -       | CSS class for the root element            |
| `classNames`             | `object`    | -       | Object of CSS classes for different parts |
| `classNames.base`        | `string`    | -       | CSS class for the base wrapper element    |
| `classNames.content`     | `string`    | -       | CSS class for the content area            |
| `classNames.iconWrapper` | `string`    | -       | CSS class for the icon wrapper            |

### Example

```jsx
<AssistantLoading icon={<CustomLoadingIcon />} className="my-loading" />
```

## MessageInput

Component for the message input field.

### Props

| Prop                           | Type                        | Default | Description                               |
| ------------------------------ | --------------------------- | ------- | ----------------------------------------- |
| `withAutoFocus`                | `boolean`                   | `false` | Whether to autofocus the input            |
| `onSend`                       | `(message: string) => void` | -       | Function called when a message is sent    |
| `onChange`                     | `(message: string) => void` | -       | Function called when input value changes  |
| `placeholder`                  | `string`                    | -       | Placeholder text for the input            |
| `sendIcon`                     | `ReactNode`                 | -       | Custom icon for the send button           |
| `value`                        | `string`                    | -       | Controlled input value                    |
| `className`                    | `string`                    | -       | CSS class for the root element            |
| `bottomContent`                | `ReactNode`                 | -       | Content to display below the input        |
| `classNames`                   | `object`                    | -       | Object of CSS classes for different parts |
| `classNames.base`              | `string`                    | -       | CSS class for the base wrapper element    |
| `classNames.container`         | `string`                    | -       | CSS class for the container               |
| `classNames.textareaContainer` | `string`                    | -       | CSS class for the textarea container      |
| `classNames.textarea`          | `string`                    | -       | CSS class for the textarea element        |
| `classNames.sendButton`        | `string`                    | -       | CSS class for the send button             |

### Example

```jsx
<MessageInput
    onSend={handleSend}
    onChange={handleInputChange}
    placeholder="Type your message..."
    withAutoFocus
    value={inputValue}
    sendIcon={<CustomSendIcon />}
    bottomContent={<div>Typing indicator...</div>}
/>
```

## Sidebar

Component for displaying a sidebar with navigation or content.

### Props

| Prop                      | Type                                                 | Default | Description                                  |
| ------------------------- | ---------------------------------------------------- | ------- | -------------------------------------------- |
| `items`                   | `T[]`                                                | -       | Array of items to render in the sidebar      |
| `children`                | `ReactNode \| ((item: T, key: number) => ReactNode)` | -       | Content or render function for sidebar items |
| `headerContent`           | `ReactNode`                                          | -       | Content to render at the top of the sidebar  |
| `withToggle`              | `boolean`                                            | `false` | Whether to show a toggle button              |
| `toggleIcon`              | `ReactNode`                                          | -       | Custom icon for the toggle button            |
| `className`               | `string`                                             | -       | CSS class for the root element               |
| `classNames`              | `object`                                             | -       | Object of CSS classes for different parts    |
| `classNames.base`         | `string`                                             | -       | CSS class for the base wrapper element       |
| `classNames.container`    | `string`                                             | -       | CSS class for the container                  |
| `classNames.content`      | `string`                                             | -       | CSS class for the content area               |
| `classNames.header`       | `string`                                             | -       | CSS class for the header area                |
| `classNames.toggleButton` | `string`                                             | -       | CSS class for the toggle button              |

### Example

```jsx
<Sidebar
    items={conversations}
    withToggle
    headerContent={<div>Conversations</div>}
>
    {(conversation) => (
        <SidebarItem isActive={active === conversation.id}>
            {conversation.title}
        </SidebarItem>
    )}
</Sidebar>
```

## SidebarItem

Component for individual items in the sidebar.

### Props

| Prop                 | Type         | Default | Description                               |
| -------------------- | ------------ | ------- | ----------------------------------------- |
| `children`           | `ReactNode`  | -       | Content of the sidebar item               |
| `onClick`            | `() => void` | -       | Function called when the item is clicked  |
| `isActive`           | `boolean`    | `false` | Whether the item is currently active      |
| `className`          | `string`     | -       | CSS class for the root element            |
| `classNames`         | `object`     | -       | Object of CSS classes for different parts |
| `classNames.base`    | `string`     | -       | CSS class for the base wrapper element    |
| `classNames.content` | `string`     | -       | CSS class for the content area            |

### Example

```jsx
<SidebarItem
    onClick={() => selectConversation(id)}
    isActive={activeConversation === id}
>
    Conversation Title
</SidebarItem>
```

## MarkdownContent

Component for rendering markdown content.

### Props

| Prop                       | Type                    | Default | Description                               |
| -------------------------- | ----------------------- | ------- | ----------------------------------------- |
| `content`                  | `string`                | -       | The markdown content to render            |
| `className`                | `string`                | -       | CSS class for the root element            |
| `onCodeCopied`             | `(code: string) => any` | -       | Function called when code is copied       |
| `classNames`               | `object`                | -       | Object of CSS classes for different parts |
| `classNames.base`          | `string`                | -       | CSS class for the base wrapper element    |
| `classNames.codeContainer` | `string`                | -       | CSS class for the code container          |
| `classNames.codeTitle`     | `string`                | -       | CSS class for the code title              |
| `classNames.codeLanguage`  | `string`                | -       | CSS class for the code language display   |
| `classNames.copyButton`    | `string`                | -       | CSS class for the copy button             |

### Example

```jsx
<MarkdownContent
    content="# Hello\nThis is **markdown** content with `code`"
    onCodeCopied={(code) => console.log("Copied:", code)}
/>
```
