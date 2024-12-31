import { ReactNode } from "react";

export type ChatProps = {
    /**
     * The children of the chat component
     */
    children?: ReactNode;
    /**
     * Whether to scroll to the bottom of the chat when the component is mounted
     */
    withScroll?: boolean;
    /**
     * The className of the chat component
     */
    className?: string;
    classNames?: {
        base?: string;
        content?: string;
        container?: string;
    };
};

export type ChatContainerProps = {
    children?: ReactNode;
    /**
     * The className of the chat container
     */
    className?: string;
};

export type HeaderProps = {
    children?: ReactNode;
    /**
     * The className of the header
     */
    className?: string;
};

export type MessagesProps<T = any> = {
    children?: ((item: T, key: number) => ReactNode) | ReactNode;
    items?: T[];
    /**
     * Content to be rendered at the end of the messages list when isLoading is true
     */
    loadingContent?: ReactNode;
    /**
     * Content to be rendered at the top of the messages list
     */
    headerContent?: ReactNode;
    /**
     * Controls whether the loading content should be displayed
     */
    isLoading?: boolean;
    /**
     * The className of the messages component
     */
    className?: string;
    /**
     * The classNames of the messages component
     */
    classNames?: {
        base?: string;
        header?: string;
    };
};

export type MessageProps = {
    /**
     * The content of the message
     */
    children?: React.ReactNode;
    /**
     * The content to display at the end of the message
     */
    endContent?: React.ReactNode;
    /**
     * The className of the message
     */
    className?: string;
    /**
     * The icon to use for the message
     */
    icon?: React.ReactNode;
    /**
     * The classNames of the message
     */
    classNames?: {
        base?: string;
        content?: string;
        icon?: string;
    };
};

export type UserMessageProps = MessageProps & {
    /**
     * The color of the user message
     */
    color?: string;
};

export type AssistantMessageProps = MessageProps;

export type AssistantLoadingProps = {
    /**
     * The icon to use for the assistant loading component
     */
    icon?: ReactNode;
    /**
     * The className of the assistant loading component
     */
    className?: string;
    /**
     * The classNames of the assistant loading component
     */
    classNames?: {
        base?: string;
        content?: string;
        iconWrapper?: string;
    };
};

export type MessageInputProps = {
    /**
     * Whether to automatically focus the message input
     */
    withAutoFocus?: boolean;
    /**
     * The function to call when the message is sent
     */
    onSend?: (message: string) => void;
    /**
     * The function to call when the value changes
     */
    onChange?: (message: string) => void;
    /**
     * The placeholder text for the message input
     */
    placeholder?: string;
    /**
     * The icon to use for the send button
     */
    sendIcon?: ReactNode;
    /**
     * The value of the message input
     */
    value?: string;
    /**
     * The className of the message input
     */
    className?: string;
    /**
     * The classNames of the message input
     */
    classNames?: {
        base?: string;
        container?: string;
        textareaContainer?: string;
        textarea?: string;
        sendButton?: string;
    };
    /**
     * The content to display at the end of the message input
     */
    bottomContent?: ReactNode;
};

export type SidebarProps<T> = {
    /**
     * The items to display in the sidebar
     */
    items?: T[];
    children?: ((item: T, key: number) => ReactNode) | ReactNode;
    /**
     * The title of the sidebar
     */
    headerContent?: ReactNode;
    /**
     * Whether to show the toggle button
     */
    withToggle?: boolean;
    /**
     * The icon to use for the toggle button
     */
    toggleIcon?: ReactNode;
    /**
     * The size of the sidebar in pixels
     */
    size?: number;
    /**
     * The className of the sidebar
     */
    className?: string;
    /**
     * The classNames of the sidebar
     */
    classNames?: {
        base?: string;
        container?: string;
        content?: string;
        header?: string;
        toggleButton?: string;
    };
};

export type SidebarItemProps = {
    /**
     * The content of the sidebar item
     */
    children: ReactNode;
    /**
     * The function to call when a sidebar item is clicked
     */
    onClick?: () => void;
    /**
     * Whether the sidebar item is active
     */
    isActive?: boolean;
    /**
     * The className of the sidebar item
     */
    className?: string;
    /**
     * The classNames of the sidebar item
     */
    classNames?: {
        base?: string;
        content?: string;
    };
};

export type MarkdownContentProps = {
    /**
     * The markdown content to render
     */
    content: string;
    /**
     * Optional className for styling the container
     */
    className?: string;
    /**
     * The classNames of the markdown content
     */
    classNames?: {
        base?: string;
        codeContainer?: string;
        codeTitle?: string;
        codeLanguage?: string;
        copyButton?: string;
    };
    /**
     * The function to call when the code is copied
     */
    onCodeCopied?: (code: string) => any;
};
