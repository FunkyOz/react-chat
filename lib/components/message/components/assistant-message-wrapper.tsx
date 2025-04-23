import React, { ReactNode } from "react";
import BaseMessageWrapper from "./base-message-wrapper";

type AssistantMessageWrapperProps = {
    children?: ReactNode;
    className?: string;
};

export const AssistantMessageWrapper: React.FC<
    AssistantMessageWrapperProps
> = ({ children, className = "" }) => (
    <BaseMessageWrapper className={`justify-start ${className}`}>
        {children}
    </BaseMessageWrapper>
);

export default AssistantMessageWrapper;
