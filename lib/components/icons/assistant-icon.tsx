import React from "react";

interface AssistantIconProps {
    className?: string;
}

export const AssistantIcon: React.FC<AssistantIconProps> = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 72 64"
        width="32"
        height="32"
        className={className}
    >
        <rect x="12" y="18" width="6" height="28" fill="#A9A9A9" />
        <rect x="18" y="18" width="12" height="6" fill="#A9A9A9" />
        <rect x="30" y="18" width="6" height="28" fill="#A9A9A9" />
        <rect x="18" y="32" width="12" height="6" fill="#A9A9A9" />
        <rect x="48" y="18" width="6" height="28" fill="#A9A9A9" />
    </svg>
);

AssistantIcon.displayName = "AssistantIcon";
