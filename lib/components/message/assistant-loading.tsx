import React from "react";
import {
    AssistantMessageWrapper,
    AssistantMessageContent,
    LoadingCircle,
    IconWrapper,
} from "./styles/messages.styles";
import { AssistantLoadingProps } from "../../types";
import { AssistantIcon } from "../icons";
import useClassNames from "../../hooks/useClassNames";

export const AssistantLoading: React.FC<AssistantLoadingProps> = ({
    className,
    icon = <AssistantIcon />,
    classNames,
}) => {
    const classes = useClassNames({ className, classNames });

    return (
        <AssistantMessageWrapper className={classes.base}>
            <IconWrapper className={classes.iconWrapper}>{icon}</IconWrapper>
            <AssistantMessageContent className={classes.content}>
                <LoadingCircle />
            </AssistantMessageContent>
        </AssistantMessageWrapper>
    );
};

AssistantLoading.displayName = "AssistantLoading";
