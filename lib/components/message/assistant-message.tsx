import React from "react";
import { AssistantMessageProps } from "../../types";
import {
    AssistantMessageContent,
    AssistantMessageWrapper,
    AssistantIconWrapper,
} from "./styles/messages.styles";
import { useChatProvider } from "../../provider";

export const AssistantMessage: React.FC<AssistantMessageProps> = ({
    children,
    endContent,
    className,
}) => {
    const {
        state: { assistantIcon },
    } = useChatProvider();

    return (
        <AssistantMessageWrapper className={className}>
            <AssistantIconWrapper>{assistantIcon}</AssistantIconWrapper>
            <AssistantMessageContent>
                {children}
                {endContent}
            </AssistantMessageContent>
        </AssistantMessageWrapper>
    );
};

AssistantMessage.displayName = "AssistantMessage";
