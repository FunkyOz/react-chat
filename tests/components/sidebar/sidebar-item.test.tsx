import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { SidebarItem } from "../../../lib/components/sidebar/sidebar-item";

// Mock the styles
vi.mock("../../../lib/components/sidebar/components", () => ({
    SidebarItemContainer: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="item-container">{children}</div>
    ),
    SidebarItemContent: ({
        children,
        onClick,
        isActive,
    }: {
        children: React.ReactNode;
        onClick?: () => void;
        isActive?: boolean;
    }) => (
        <div
            data-testid="item-content"
            onClick={onClick}
            data-active={isActive}
        >
            {children}
        </div>
    ),
}));

describe("SidebarItem", () => {
    it("renders children content", () => {
        render(
            <SidebarItem>
                <div>Test Content</div>
            </SidebarItem>
        );

        expect(screen.getByText("Test Content")).toBeInTheDocument();
    });

    it("handles click events", () => {
        const handleClick = vi.fn();
        render(
            <SidebarItem onClick={handleClick}>
                <div>Clickable Item</div>
            </SidebarItem>
        );

        const item = screen.getByTestId("item-content");
        fireEvent.click(item);

        expect(handleClick).toHaveBeenCalled();
    });

    it("applies active styles when isActive is true", () => {
        render(
            <SidebarItem isActive={true}>
                <div>Active Item</div>
            </SidebarItem>
        );

        const itemContent = screen.getByTestId("item-content");
        expect(itemContent).toHaveAttribute("data-active", "true");
    });

    it("applies inactive styles when isActive is false", () => {
        render(
            <SidebarItem isActive={false}>
                <div>Inactive Item</div>
            </SidebarItem>
        );

        const itemContent = screen.getByTestId("item-content");
        expect(itemContent).toHaveAttribute("data-active", "false");
    });

    it("renders without onClick handler", () => {
        render(
            <SidebarItem>
                <div>No Click Handler</div>
            </SidebarItem>
        );

        const item = screen.getByTestId("item-content");
        fireEvent.click(item);
        // Should not throw any errors
    });
});
