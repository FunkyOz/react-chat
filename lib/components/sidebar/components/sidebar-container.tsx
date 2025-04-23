import React, { ReactNode } from "react";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { useChatProvider } from "../../../provider";
import { getSidebarWidthClass } from "../../../utils";

type SidebarContainerProps = {
    children?: ReactNode;
    className?: string;
};

export const SidebarContainer: React.FC<SidebarContainerProps> = ({
    children,
    className = "",
}) => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const {
        state: { isSidebarOpen, sidebarSize },
    } = useChatProvider();
    const widthClass = isSidebarOpen
        ? getSidebarWidthClass(sidebarSize)
        : "w-0";
    const mobileClasses = isMobile ? "absolute z-30 inset-0 shadow-lg" : "";

    return (
        <div
            className={`bg-[#f9f9f9] overflow-hidden flex flex-col h-full pt-16 transition-width duration-300 ease-in-out ${mobileClasses} ${widthClass} ${className}`}
        >
            {children}
        </div>
    );
};

export default SidebarContainer;
