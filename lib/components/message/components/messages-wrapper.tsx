import React, { ReactNode, useMemo } from "react";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { useChatProvider } from "../../../provider";
import { getMessagesPaddingLeftClass } from "../../../utils";

type MessagesWrapperProps = {
    children?: ReactNode;
    className?: string;
    withHeader?: boolean;
};

export const MessagesWrapper: React.FC<MessagesWrapperProps> = ({
    children,
    className = "",
    withHeader = false,
}) => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const {
        state: { isSidebarOpen, sidebarSize },
    } = useChatProvider();
    const classes = useMemo(() => {
        const memoClasses: string[] = [];
        if (withHeader) {
            memoClasses.push("pt-16");
        }
        if (className) {
            memoClasses.push(className);
        }
        if (!isMobile) {
            memoClasses.push("transition-[padding-left]", "ease-in-out");
            if (isSidebarOpen) {
                memoClasses.push(getMessagesPaddingLeftClass(sidebarSize));
            }
        }
        return memoClasses.join(" ");
    }, [withHeader, isMobile, isSidebarOpen, sidebarSize, className]);

    return (
        <div
            className={`flex flex-col flex-1 gap-4 relative w-full pb-20 ${classes}`}
        >
            {children}
        </div>
    );
};

export default MessagesWrapper;
