import React, { ReactNode } from "react";
import BaseMessageContent from "./base-message-content";

type AssistantMessageContentProps = {
    children?: ReactNode;
    className?: string;
};

export const AssistantMessageContent: React.FC<
    AssistantMessageContentProps
> = ({ children, className = "" }) => (
    <BaseMessageContent className={`text-black whitespace-normal ${className}`}>
        {children}
    </BaseMessageContent>
);

export default AssistantMessageContent;
