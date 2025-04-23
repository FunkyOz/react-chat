import React, { ReactNode, useMemo } from "react";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { useChatProvider } from "../../../provider";
import { getMessagesPaddingLeftClass } from "../../../utils";

type MessageInputWrapperProps = {
    children?: ReactNode;
    className?: string;
};

export const MessageInputWrapper: React.FC<MessageInputWrapperProps> = ({
    children,
    className = "",
}) => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const {
        state: { isSidebarOpen, sidebarSize },
    } = useChatProvider();
    const classes = useMemo(() => {
        const memoClasses: string[] = [];
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
    }, [isMobile, isSidebarOpen, sidebarSize, className]);

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 bg-white px-4 pb-4 z-10 ${classes}`}
        >
            {children}
        </div>
    );
};

export default MessageInputWrapper;
