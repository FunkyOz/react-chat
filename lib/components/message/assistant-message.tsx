import React from "react";
import useClassNames from "../../hooks/useClassNames";
import { AssistantMessageProps } from "../../types";
import { AssistantIcon } from "../icons";
import {
    AssistantMessageContent,
    AssistantMessageWrapper,
    IconWrapper,
} from "./components";

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
