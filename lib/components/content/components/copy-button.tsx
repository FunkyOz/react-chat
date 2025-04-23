import React, { ButtonHTMLAttributes, ReactNode } from "react";

type CopyButtonProps = {
    children?: ReactNode;
    className?: string;
    isCopied?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const CopyButton: React.FC<CopyButtonProps> = ({
    children,
    className = "",
    isCopied = false,
    onClick,
    ...props
}) => (
    <button
        className={`bg-transparent text-[#5d5d5d] border-none flex items-center ${isCopied ? "cursor-default" : "cursor-pointer"} ${className}`}
        onClick={onClick}
        {...props}
    >
        {children}
    </button>
);

export default CopyButton;
