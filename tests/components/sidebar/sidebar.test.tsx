import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, afterEach } from "vitest";
import { Sidebar } from "../../../lib/components/sidebar/sidebar";
import { SidebarItem } from "../../../lib/components/sidebar/sidebar-item";

// Mock the chat provider
vi.mock("../../../lib/provider", () => ({
    useChatProvider: vi.fn(() => ({
        state: {
            isSidebarOpen: true,
            isDarkMode: false,
            withAutoFocus: false,
            assistantIcon: null,
        },
        dispatch: vi.fn(),
    })),
}));

// Mock the icons
vi.mock("../../../lib/components/icons", () => ({
    MenuIcon: () => <div data-testid="menu-icon">Menu Icon</div>,
}));

// Mock the styles
vi.mock("../../../lib/components/sidebar/styles/sidebar.styles", () => ({
    SidebarWrapper: ({
        children,
        $isOpen,
    }: {
        children: React.ReactNode;
        $isOpen: boolean;
    }) => (
        <div data-testid="sidebar-wrapper" data-is-open={$isOpen}>
            {children}
        </div>
    ),
    SidebarContainer: ({
        children,
        $isOpen,
    }: {
        children: React.ReactNode;
        $isOpen: boolean;
    }) => (
        <div data-testid="sidebar-container" data-is-open={$isOpen}>
            {children}
        </div>
    ),
    SidebarContent: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="sidebar-content">{children}</div>
    ),
    SidebarHeader: ({
        children,
        $withToggle,
        $isOpen,
    }: {
        children: React.ReactNode;
        $withToggle: boolean;
        $isOpen: boolean;
    }) => (
        <div
            data-testid="sidebar-header"
            data-with-toggle={$withToggle}
            data-is-open={$isOpen}
        >
            {children}
        </div>
    ),
    ToggleButton: ({
        children,
        onClick,
        $isOpen,
    }: {
        children: React.ReactNode;
        onClick: () => void;
        $isOpen: boolean;
    }) => (
        <button
            data-testid="toggle-button"
            onClick={onClick}
            data-is-open={$isOpen}
        >
            {children}
        </button>
    ),
}));

describe("Sidebar", () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    it("renders with default props", () => {
        render(<Sidebar />);

        expect(screen.getByTestId("menu-icon")).toBeInTheDocument();
        expect(screen.getByTestId("toggle-button")).toBeInTheDocument();
    });

    it("renders with custom title", () => {
        render(<Sidebar headerContent="Test Title" />);

        expect(screen.getByText("Test Title")).toBeInTheDocument();
    });

    it("renders without toggle button when withToggle is false", () => {
        render(<Sidebar withToggle={false} />);

        expect(screen.queryByTestId("toggle-button")).not.toBeInTheDocument();
    });

    it("renders with custom toggle icon", () => {
        const CustomIcon = () => (
            <div data-testid="custom-icon">Custom Icon</div>
        );
        render(<Sidebar toggleIcon={<CustomIcon />} />);

        expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
        expect(screen.queryByTestId("menu-icon")).not.toBeInTheDocument();
    });

    it("renders sidebar items when provided", () => {
        const items = [
            { id: "1", content: "Item 1" },
            { id: "2", content: "Item 2" },
        ];

        render(
            <Sidebar items={items}>
                {(item) => (
                    <SidebarItem key={item.id}>{item.content}</SidebarItem>
                )}
            </Sidebar>
        );

        expect(screen.getByText("Item 1")).toBeInTheDocument();
        expect(screen.getByText("Item 2")).toBeInTheDocument();
    });

    it("renders children when provided", () => {
        render(
            <Sidebar>
                <SidebarItem>Item 1</SidebarItem>
            </Sidebar>
        );

        expect(screen.getByText("Item 1")).toBeInTheDocument();
    });

    it("applies correct styles based on sidebar open state", () => {
        render(<Sidebar />);

        expect(screen.getByTestId("sidebar-container")).toHaveAttribute(
            "data-is-open",
            "true"
        );
    });
});
