import React, { ReactNode } from "react";
import { useChatProvider } from "../../../provider";

type SidebarHeaderProps = {
    children?: ReactNode;
    className?: string;
    withToggle?: boolean;
};

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({
    children,
    className = "",
    withToggle = false,
}) => {
    const {
        state: { isSidebarOpen },
    } = useChatProvider();
    const padding = withToggle ? "pl-16 pr-4" : "px-4";
    const opacity = isSidebarOpen ? "opacity-100" : "opacity-0";

    return (
        <div
            className={`flex items-center ${padding} bg-[#f9f9f9] absolute min-h-[3.75rem] inset-x-0 top-0 z-10 ${opacity} transition-opacity duration-200 ease-in-out ${className}`}
        >
            {children}
        </div>
    );
};

export default SidebarHeader;
