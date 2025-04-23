// @ts-expect-error: 'React' is declared but its value is never read.
import React from "react";
import useClassNames from "../../hooks/useClassNames";
import type { SidebarProps } from "../../types";
import { MenuIcon } from "../icons";
import {
    SidebarContainer,
    SidebarContent,
    SidebarHeader,
    SidebarWrapper,
    ToggleButton,
} from "./components";
import { useSidebar } from "./hooks/useSidebar";
import { useSidebarHandler } from "./hooks/useSidebarHandler";

export const Sidebar = <T extends object>({
    items = [],
    children,
    headerContent,
    withToggle = true,
    toggleIcon = <MenuIcon />,
    className,
    classNames,
}: SidebarProps<T>) => {
    const { renderItems } = useSidebar({
        items,
        children,
    });
    const { handleToggle } = useSidebarHandler();
    const classes = useClassNames({ className, classNames });

    return (
        <SidebarWrapper className={classes.base}>
            {withToggle && (
                <ToggleButton
                    className={classes.toggleButton}
                    onClick={handleToggle}
                >
                    {toggleIcon}
                </ToggleButton>
            )}
            <SidebarContainer className={classes.container}>
                <SidebarContent className={classes.content}>
                    <SidebarHeader
                        className={classes.header}
                        withToggle={withToggle}
                    >
                        {headerContent}
                    </SidebarHeader>
                    {renderItems()}
                </SidebarContent>
            </SidebarContainer>
        </SidebarWrapper>
    );
};

Sidebar.displayName = "Sidebar";
