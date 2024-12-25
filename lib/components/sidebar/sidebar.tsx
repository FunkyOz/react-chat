// @ts-expect-error: 'React' is declared but its value is never read.
import React from "react";
import type { SidebarProps } from "../../types";
import {
    SidebarContainer,
    SidebarContent,
    SidebarHeader,
    ToggleButton,
    SidebarWrapper,
} from "./styles/sidebar.styles";
import { useSidebar } from "./hooks/useSidebar";
import { MenuIcon } from "../icons";
import { useChatProvider } from "../../provider";
import useClassNames from "../../hooks/useClassNames";

export const Sidebar = <T extends object>({
    items = [],
    children,
    title,
    withToggle = true,
    toggleIcon = <MenuIcon />,
    size: pixelSize,
    className,
    classNames,
}: SidebarProps<T>) => {
    const { renderItems, handleToggle, size } = useSidebar({
        items,
        children,
        size: pixelSize,
    });
    const {
        state: { isSidebarOpen },
    } = useChatProvider();
    const classes = useClassNames({ className, classNames });

    return (
        <SidebarWrapper className={classes.base} $isOpen={isSidebarOpen}>
            {withToggle && (
                <ToggleButton
                    className={classes.toggleButton}
                    onClick={handleToggle}
                    $isOpen={isSidebarOpen}
                >
                    {toggleIcon}
                </ToggleButton>
            )}
            <SidebarContainer
                className={classes.container}
                $isOpen={isSidebarOpen}
                $size={size}
            >
                <SidebarContent className={classes.content} $size={size}>
                    <SidebarHeader
                        className={classes.header}
                        $withToggle={withToggle}
                        $isOpen={isSidebarOpen}
                    >
                        {title}
                    </SidebarHeader>
                    {renderItems()}
                </SidebarContent>
            </SidebarContainer>
        </SidebarWrapper>
    );
};

Sidebar.displayName = "Sidebar";
