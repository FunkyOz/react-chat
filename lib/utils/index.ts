import { Size } from "../types";


/**
 * Returns the width of the sidebar based on the given size.
 * @param size The size of the sidebar.
 * @returns The width of the sidebar in rem.
 */
export const getSidebarWidthClass = (size: Size): string => {
    const widthMap: Record<Size, string> = {
        sm: "w-56",
        md: "w-64",
        lg: "w-72",
        xl: "w-80",
    };
    return widthMap[size];
};

/**
 * Returns the padding-left of the messages based on the given size.
 * @param size The size of the sidebar.
 * @returns The padding-left of the messages in rem.
 */
export const getMessagesPaddingLeftClass = (size: Size): string => {
    const paddingMap: Record<Size, string> = {
        sm: "pl-60",
        md: "pl-68",
        lg: "pl-76",
        xl: "pl-84",
    };
    return paddingMap[size];
};
