import React, { ReactNode } from "react";
import { useChatProvider } from "../../../provider";

type ToggleButtonProps = {
    children?: ReactNode;
    className?: string;
    onClick?: () => void;
};

export const ToggleButton: React.FC<ToggleButtonProps> = ({
    children,
    className = "",
    onClick,
}) => {
    const {
        state: { isSidebarOpen },
    } = useChatProvider();
    const rotate = isSidebarOpen ? "rotate-180" : "rotate-0";

    return (
        <button
            className={`flex items-center justify-center w-8 h-8 border-none rounded-md bg-transparent cursor-pointer text-black absolute top-3 left-4 z-40 ${rotate} transition-all duration-300 ease-in-out hover:bg-black/10 ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default ToggleButton;
