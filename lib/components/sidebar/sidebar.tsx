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

export const Sidebar = <T extends object>({
    items = [],
    children,
    title,
    withToggle = true,
    toggleIcon,
}: SidebarProps<T>) => {
    const { renderItems, handleToggle } = useSidebar({ items, children });
    const {
        state: { isSidebarOpen },
    } = useChatProvider();

    return (
        <SidebarWrapper $isOpen={isSidebarOpen}>
            {withToggle && (
                <ToggleButton onClick={handleToggle} $isOpen={isSidebarOpen}>
                    {toggleIcon || <MenuIcon />}
                </ToggleButton>
            )}
            <SidebarContainer $isOpen={isSidebarOpen}>
                <SidebarContent>
                    <SidebarHeader
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
