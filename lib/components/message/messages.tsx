import React from "react";
import { MessagesWrapper, BottomHelper } from "./styles/messages.styles";
import { MessagesProps } from "../../types";
import { useScrollToBottom } from "./hooks/useScrollToBottom";
import useClassNames from "../../hooks/useClassNames";

export const Messages = <T extends object>({
    items = [],
    children,
    loadingContent,
    isLoading = false,
    className,
    classNames,
}: MessagesProps<T>) => {
    const bottomRef = useScrollToBottom([children, isLoading]);

    const renderItems = () => {
        if (typeof children === "function") {
            return items.map((item, index) =>
                (children as (item: T, key: number) => React.ReactNode)(
                    item,
                    index
                )
            );
        }
        return children;
    };

    const classes = useClassNames({ className, classNames });

    return (
        <MessagesWrapper className={classes.base}>
            {renderItems()}
            {isLoading && loadingContent}
            <BottomHelper ref={bottomRef} />
        </MessagesWrapper>
    );
};

Messages.displayName = "Messages";
