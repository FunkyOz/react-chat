import React from "react";
import { MessagesWrapper, MessagesHeader } from "./styles/messages.styles";
import { MessagesProps } from "../../types";
import useClassNames from "../../hooks/useClassNames";
import { useChatProvider } from "../../provider";
import { useMediaQuery } from "../../hooks/useMediaQuery";

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
    const isMobile = useMediaQuery("(max-width: 768px)");

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
            $withHeader={Boolean(headerContent)}
        >
            {headerContent && (
                <MessagesHeader
                    className={classes.header}
                    $isSidebarOpen={isSidebarOpen}
                    $isMobile={isMobile}
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
