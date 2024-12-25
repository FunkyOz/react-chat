import React from "react";
import {
    AssistantMessageWrapper,
    AssistantMessageContent,
    LoadingCircle,
    AssistantIconWrapper,
} from "./styles/messages.styles";
import { useChatProvider } from "../../provider";
import { AssistantLoadingProps } from "../../types";

export const AssistantLoading: React.FC<AssistantLoadingProps> = ({
    className,
}) => {
    const {
        state: { assistantIcon },
    } = useChatProvider();
    return (
        <AssistantMessageWrapper className={className}>
            <AssistantIconWrapper>{assistantIcon}</AssistantIconWrapper>
            <AssistantMessageContent>
                <LoadingCircle />
            </AssistantMessageContent>
        </AssistantMessageWrapper>
    );
};

AssistantLoading.displayName = "AssistantLoading";
