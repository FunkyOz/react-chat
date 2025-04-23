import React, { ReactNode } from "react";

type MessageInputContainerProps = {
    children?: ReactNode;
    className?: string;
};

export const MessageInputContainer: React.FC<MessageInputContainerProps> = ({
    children,
    className = "",
}) => (
    <div
        className={`flex flex-col py-3 px-4 bg-[#f3f3f3] items-center max-w-[45rem] mx-auto box-border transition-width duration-300 ease-in-out w-full rounded-xl ${className}`}
    >
        {children}
    </div>
);

export default MessageInputContainer;
