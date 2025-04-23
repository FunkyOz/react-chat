import React, { ReactNode } from "react";

type IconWrapperProps = {
    children?: ReactNode;
    className?: string;
};

export const IconWrapper: React.FC<IconWrapperProps> = ({
    children,
    className = "",
}) => (
    <div
        className={`bg-white border border-[#e5e7eb] rounded-full p-1 flex items-center justify-center min-w-8 min-h-8 ${className}`}
    >
        {children}
    </div>
);

export default IconWrapper;
