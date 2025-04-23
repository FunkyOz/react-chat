import React, { ReactNode, useMemo } from "react";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { useChatProvider } from "../../../provider";
import { getMessagesPaddingLeftClass } from "../../../utils";

type MessagesHeaderProps = {
    children?: ReactNode;
    className?: string;
};

export const MessagesHeader: React.FC<MessagesHeaderProps> = ({
    children,
    className = "",
}) => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const {
        state: { hasSidebar, isSidebarOpen, sidebarSize },
    } = useChatProvider();
    const classes = useMemo(() => {
        const memoClasses: string[] = [];
        if (className) {
            memoClasses.push(className);
        }
        if (hasSidebar) {
            if (isMobile) {
                memoClasses.push("pl-16");
            } else {
                memoClasses.push(
                    "transition-[padding-left]",
                    "ease-in-out",
                    "delay-50"
                );
                if (isSidebarOpen) {
                    memoClasses.push(getMessagesPaddingLeftClass(sidebarSize));
                } else {
                    memoClasses.push("pl-16");
                }
            }
        } else {
            memoClasses.push("pl-4");
        }
        return memoClasses.join(" ");
    }, [isMobile, isSidebarOpen, sidebarSize, className]);

    return (
        <div
            className={`flex items-center py-4 min-h-[3.75rem] fixed inset-x-0 top-0 z-10 bg-white ${classes}`}
        >
            {children}
        </div>
    );
};

export default MessagesHeader;
