import React, { ReactNode } from "react";

type SidebarItemContentProps = {
    children?: ReactNode;
    className?: string;
    isActive?: boolean;
    onClick?: () => void;
};

export const SidebarItemContent: React.FC<SidebarItemContentProps> = ({
    children,
    className = "",
    isActive = false,
    onClick,
}) => {
    const activeClasses = isActive ? "bg-gray-200" : "";

    return (
        <div
            className={`px-4 py-2 rounded-md cursor-pointer transition-colors duration-200 text-sm hover:bg-gray-100 ${activeClasses} ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default SidebarItemContent;
