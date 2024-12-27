import React from "react";
import {
    MessagesWrapper,
    BottomHelper,
    MessagesHeader,
} from "./styles/messages.styles";
import { MessagesProps } from "../../types";
import { useScrollToBottom } from "./hooks/useScrollToBottom";
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
    const bottomRef = useScrollToBottom([items, isLoading]);
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
            <BottomHelper ref={bottomRef} />
        </MessagesWrapper>
    );
}

Messages.displayName = "Messages";
