import React, { ReactNode } from "react";
import { getSidebarWidthClass } from "../../../utils";
import { useChatProvider } from "../../../provider";

type SidebarContentProps = {
    children?: ReactNode;
    className?: string;
};

export const SidebarContent: React.FC<SidebarContentProps> = ({
    children,
    className = "",
}) => {
    const {
        state: { sidebarSize },
    } = useChatProvider();
    return (
        <div
            className={`h-full overflow-y-auto ${getSidebarWidthClass(sidebarSize)} ${className}`}
        >
            {children}
        </div>
    );
};

export default SidebarContent;
