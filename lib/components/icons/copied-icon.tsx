import React from "react";
import { IconContainer } from "./components";

interface CopiedIconProps {
    className?: string;
}

export const CopiedIcon: React.FC<CopiedIconProps> = ({ className }) => (
    <IconContainer>
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            data-testid="copied-icon"
        >
            <path
                d="M13.5 5.5L6.5 12.5L2.5 8.5"
                stroke="#10B981"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </IconContainer>
);

CopiedIcon.displayName = "CopiedIcon";
