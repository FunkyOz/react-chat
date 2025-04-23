import React, { ButtonHTMLAttributes, ReactNode } from "react";

type SendButtonProps = {
    children?: ReactNode;
    className?: string;
    disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const SendButton: React.FC<SendButtonProps> = ({
    children,
    className = "",
    disabled = false,
    onClick,
    ...props
}) => (
    <button
        className={`w-8 h-8 p-0 flex items-center justify-center bg-transparent text-black border-none rounded-md text-xl cursor-pointer transition-colors disabled:text-[#9ca3af] disabled:cursor-not-allowed hover:bg-black/10 ${className}`}
        onClick={onClick}
        disabled={disabled}
        {...props}
    >
        {children}
    </button>
);

export default SendButton;
