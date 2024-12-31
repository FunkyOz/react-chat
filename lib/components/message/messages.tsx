import React from "react";
import { MessagesWrapper, MessagesHeader } from "./styles/messages.styles";
import { MessagesProps } from "../../types";
import useClassNames from "../../hooks/useClassNames";
import { useChatProvider } from "../../provider";

export function Messages<T>({
    items = [],
    children,
    loadingContent,
    isLoading = false,
    className,
    classNames,
    headerContent,
}: MessagesProps<T>) {
    const {
        state: { isSidebarOpen },
    } = useChatProvider();

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
            $isWithHeader={!headerContent}
        >
            {headerContent && (
                <MessagesHeader
                    className={classes.header}
                    $isSidebarOpen={isSidebarOpen}
                >
                    {headerContent}
                </MessagesHeader>
            )}
            {renderItems()}
            {isLoading && loadingContent}
        </MessagesWrapper>
    );
}

Messages.displayName = "Messages";
