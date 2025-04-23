import React, { ReactNode } from "react";

type ChatWrapperProps = {
    children?: ReactNode;
    className?: string;
};

export const ChatWrapper: React.FC<ChatWrapperProps> = ({
    children,
    className = "",
}) => (
    <div className={`flex flex-col h-full w-full ${className}`}>{children}</div>
);

export default ChatWrapper;
