import { ReactNode } from "react";

export type ChatProps = {
    children?: ReactNode;
    withAutoFocus?: boolean;
    assistantIcon?: React.ReactNode;
};

export type ChatContainerProps = {
    children?: ReactNode;
};

export type HeaderProps = {
    children?: ReactNode;
};

export type MessagesProps<T = any> = {
    children?: ((item: T, key: number) => ReactNode) | ReactNode;
    items?: T[];
    /**
     * Content to be rendered at the end of the messages list when isLoading is true
     */
    loadingContent?: ReactNode;
    /**
     * Controls whether the loading content should be displayed
     */
    isLoading?: boolean;
    className?: string;
};

export type MessageProps = {
    children?: React.ReactNode;
    endContent?: React.ReactNode;
    className?: string;
};

export type UserMessageProps = MessageProps & {
    color?: string;
};

export type AssistantMessageProps = MessageProps;

export type AssistantLoadingProps = {
    className?: string;
};

export type MessageInputProps = {
    onSend?: (message: string) => void;
    placeholder?: string;
    sendIcon?: ReactNode;
    value?: string;
    className?: string;
};

export type SidebarProps<T> = {
    items?: T[];
    children?: ((item: T, key: number) => ReactNode) | ReactNode;
    title?: string;
    withToggle?: boolean;
    toggleIcon?: ReactNode;
};

export type SidebarItemProps = {
    children: ReactNode;
    onClick?: () => void;
    isActive?: boolean;
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
    onCodeCopied?: (code: string) => any;
};
