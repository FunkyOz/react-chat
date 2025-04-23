import React from "react";
import useClassNames from "../../hooks/useClassNames";
import { MessagesProps } from "../../types";
import { MessagesHeader, MessagesWrapper } from "./components";

export function Messages<T>({
    items = [],
    children,
    loadingContent,
    isLoading = false,
    className,
    classNames,
    headerContent,
}: MessagesProps<T>) {
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
        <MessagesWrapper
            className={classes.base}
            withHeader={Boolean(headerContent)}
        >
            {headerContent && (
                <MessagesHeader className={classes.header}>
                    {headerContent}
                </MessagesHeader>
            )}
            {renderItems()}
            {isLoading && loadingContent}
        </MessagesWrapper>
    );
}

Messages.displayName = "Messages";
