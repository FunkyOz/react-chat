import {
    UserMessageContent,
    UserMessageWrapper,
} from "./styles/messages.styles";
import type { UserMessageProps } from "../../types";

export const UserMessage = ({
    children,
    endContent,
    color,
    className,
}: UserMessageProps) => {
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
