import React from "react";
import {
    IconWrapper,
    UserMessageContent,
    UserMessageWrapper,
} from "./styles/messages.styles";
import type { UserMessageProps } from "../../types";
import useClassNames from "../../hooks/useClassNames";

export const UserMessage: React.FC<UserMessageProps> = ({
    children,
    endContent,
    color,
    className,
    icon,
    classNames,
}) => {
    const classes = useClassNames({ className, classNames });

    return (
        <UserMessageWrapper className={classes.base}>
            {icon && <IconWrapper className={classes.icon}>{icon}</IconWrapper>}
            <UserMessageContent className={classes.content} $color={color}>
                {children}
                {endContent}
            </UserMessageContent>
        </UserMessageWrapper>
    );
};

UserMessage.displayName = "UserMessage";
