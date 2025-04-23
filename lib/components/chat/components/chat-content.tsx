import React, { ReactNode } from "react";

type ChatContentProps = {
    children?: ReactNode;
    className?: string;
};

export const ChatContent: React.FC<ChatContentProps> = ({
    children,
    className = "",
}) => (
    <div className={`flex flex-1 overflow-hidden ${className}`}>{children}</div>
);

export default ChatContent;
