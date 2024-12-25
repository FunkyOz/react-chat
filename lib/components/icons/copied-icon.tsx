import React from "react";
import { IconContainer } from "./styles/icon-container.styles";
interface CopiedIconProps {
    className?: string;
}

export const CopiedIcon: React.FC<CopiedIconProps> = ({ className }) => (
    <IconContainer>
        <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                fillRule="evenodd"
                d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                clipRule="evenodd"
            ></path>
        </svg>
        Copied!
    </IconContainer>
);

CopiedIcon.displayName = "CopiedIcon";
