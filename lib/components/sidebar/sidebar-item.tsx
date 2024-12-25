import React from "react";
import {
    SidebarItemContainer,
    SidebarItemContent,
} from "./styles/sidebar-item.styles";
import { SidebarItemProps } from "../../types";
import useClassNames from "../../hooks/useClassNames";

export const SidebarItem: React.FC<SidebarItemProps> = ({
    children,
    onClick,
    isActive,
    className,
    classNames,
}) => {
    const classes = useClassNames({ className, classNames });

    return (
        <SidebarItemContainer className={classes.base}>
            <SidebarItemContent
                className={classes.content}
                onClick={onClick}
                $isActive={isActive}
            >
                {children}
            </SidebarItemContent>
        </SidebarItemContainer>
    );
};

SidebarItem.displayName = "SidebarItem";
