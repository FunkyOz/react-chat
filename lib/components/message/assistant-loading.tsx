import React from "react";
import useClassNames from "../../hooks/useClassNames";
import { AssistantLoadingProps } from "../../types";
import { AssistantIcon } from "../icons";
import {
    AssistantMessageContent,
    AssistantMessageWrapper,
    IconWrapper,
    LoadingCircle,
} from "./components";

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
