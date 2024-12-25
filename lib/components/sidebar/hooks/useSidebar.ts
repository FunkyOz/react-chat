import { ReactNode, isValidElement } from "react";
import { useChatProvider } from "../../../provider";
import { SidebarItem } from "../sidebar-item";

type UseSidebarReturn = {
    renderItems: () => ReactNode;
    handleToggle: () => any;
};

type UseSidebarProps<T> = {
    items?: T[];
    children?: ReactNode | ((item: T, key: number) => ReactNode);
};

// Helper function to check if a React element is a SidebarItem
const isSidebarItemElement = (element: ReactNode): boolean => {
    return isValidElement(element) && element.type === SidebarItem;
};

export const useSidebar = <T>({
    items = [],
    children,
}: UseSidebarProps<T>): UseSidebarReturn => {
    const { dispatch } = useChatProvider();

    const renderItems = (): ReactNode => {
        if (typeof children === "function") {
            return items.map((item, key) => {
                const child = children(item, key);
                if (!isSidebarItemElement(child)) {
                    throw new Error(
                        "Only SidebarItem components are allowed as children"
                    );
                }
                return child;
            });
        }

        if (children && !isSidebarItemElement(children)) {
            throw new Error(
                "Only SidebarItem components are allowed as children"
            );
        }

        return children as ReactNode;
    };

    const handleToggle = () => {
        dispatch({ type: "TOGGLE_SIDEBAR" });
    };

    return {
        renderItems,
        handleToggle,
    };
};
