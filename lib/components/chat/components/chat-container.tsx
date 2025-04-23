import React, { ReactNode } from "react";

type ChatContainerProps = {
    children?: ReactNode;
    className?: string;
};

export const ChatContainer: React.FC<ChatContainerProps> = ({
    children,
    className = "",
}) => (
    <div
        className={`flex flex-col flex-1 relative h-full overflow-y-auto bg-white ${className}`}
    >
        {children}
    </div>
);

export default ChatContainer;
