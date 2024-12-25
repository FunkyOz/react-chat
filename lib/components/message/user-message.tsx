import React from "react";
import {
    UserMessageContent,
    UserMessageWrapper,
} from "./styles/messages.styles";
import type { UserMessageProps } from "../../types";

export const UserMessage: React.FC<UserMessageProps> = ({
    children,
    endContent,
    color,
    className,
}) => {
    return (
        <UserMessageWrapper className={className}>
            <UserMessageContent $color={color}>
                {children}
                {endContent}
            </UserMessageContent>
        </UserMessageWrapper>
    );
};

UserMessage.displayName = "UserMessage";
