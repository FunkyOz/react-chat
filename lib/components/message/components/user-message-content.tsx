import React, { ReactNode } from "react";
import BaseMessageContent from "./base-message-content";

type UserMessageContentProps = {
    children?: ReactNode;
    className?: string;
    color?: string;
};

export const UserMessageContent: React.FC<UserMessageContentProps> = ({
    children,
    className = "",
    color = "#2563eb",
}) => (
    <BaseMessageContent
        className={`text-white py-3 px-4 ${className}`}
        style={{ backgroundColor: color }}
    >
        {children}
    </BaseMessageContent>
);

export default UserMessageContent;
