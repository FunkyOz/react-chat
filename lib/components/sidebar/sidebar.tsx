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
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useSidebarHandler } from "./hooks/useSidebarHandler";

export const Sidebar = <T extends object>({
    items = [],
    children,
    headerContent,
    withToggle = true,
    toggleIcon = <MenuIcon />,
    size: pixelSize,
    className,
    classNames,
}: SidebarProps<T>) => {
    const { renderItems, size } = useSidebar({
        items,
        children,
        size: pixelSize,
    });
    const { handleToggle } = useSidebarHandler();
    const {
        state: { isSidebarOpen },
    } = useChatProvider();
    const classes = useClassNames({ className, classNames });
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <SidebarWrapper className={classes.base}>
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
                $isMobile={isMobile}
            >
                <SidebarContent className={classes.content} $size={size}>
                    <SidebarHeader
                        className={classes.header}
                        $withToggle={withToggle}
                        $isOpen={isSidebarOpen}
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
