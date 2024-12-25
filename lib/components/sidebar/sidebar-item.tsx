import React from "react";
import {
    SidebarItemContainer,
    SidebarItemContent,
} from "./styles/sidebar-item.styles";
import { SidebarItemProps } from "../../types";

export const SidebarItem: React.FC<SidebarItemProps> = ({
    children,
    onClick,
    isActive,
}) => {
    return (
        <SidebarItemContainer>
            <SidebarItemContent onClick={onClick} $isActive={isActive}>
                {children}
            </SidebarItemContent>
        </SidebarItemContainer>
    );
};

SidebarItem.displayName = "SidebarItem";
