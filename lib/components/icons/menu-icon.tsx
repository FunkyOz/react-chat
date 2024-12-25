import React from "react";

interface MenuIconProps {
    className?: string;
}

export const MenuIcon: React.FC<MenuIconProps> = ({ className }) => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M2 5h12M2 11h9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

MenuIcon.displayName = "MenuIcon";
