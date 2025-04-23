import React, { ReactNode } from "react";

type SidebarWrapperProps = {
    children?: ReactNode;
    className?: string;
};

export const SidebarWrapper: React.FC<SidebarWrapperProps> = ({
    children,
    className = "",
}) => (
    <div className={`fixed left-0 h-full bg-transparent z-30 ${className}`}>
        {children}
    </div>
);

export default SidebarWrapper;
