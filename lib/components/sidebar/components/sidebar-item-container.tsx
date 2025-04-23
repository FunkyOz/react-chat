import React, { ReactNode } from "react";

type SidebarItemContainerProps = {
    children?: ReactNode;
    className?: string;
};

export const SidebarItemContainer: React.FC<SidebarItemContainerProps> = ({
    children,
    className = "",
}) => <div className={`py-1 px-2 ${className}`}>{children}</div>;

export default SidebarItemContainer;
