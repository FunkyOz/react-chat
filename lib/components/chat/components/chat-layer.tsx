import React, { ReactNode } from "react";

type ChatLayerProps = {
    children?: ReactNode;
    className?: string;
    onClick?: () => void;
};

export const ChatLayer: React.FC<ChatLayerProps> = ({
    children,
    className = "",
    onClick,
}) => (
    <div
        className={`fixed inset-0 z-20 bg-black/40 ${className}`}
        onClick={onClick}
    >
        {children}
    </div>
);

export default ChatLayer;
