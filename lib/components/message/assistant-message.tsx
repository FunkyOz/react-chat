import React from "react";
import { AssistantMessageProps } from "../../types";
import {
    AssistantMessageContent,
    AssistantMessageWrapper,
    IconWrapper,
} from "./styles/messages.styles";
import { AssistantIcon } from "../icons";
import useClassNames from "../../hooks/useClassNames";

export const AssistantMessage: React.FC<AssistantMessageProps> = ({
    children,
    endContent,
    className,
    classNames,
    icon = <AssistantIcon />,
}) => {
    const classes = useClassNames({ className, classNames });

    return (
        <AssistantMessageWrapper className={classes.base}>
            <IconWrapper className={classes.icon}>{icon}</IconWrapper>
            <AssistantMessageContent className={classes.content}>
                {children}
                {endContent}
            </AssistantMessageContent>
        </AssistantMessageWrapper>
    );
};

AssistantMessage.displayName = "AssistantMessage";
