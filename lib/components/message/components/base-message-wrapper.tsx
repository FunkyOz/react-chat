import React, { ReactNode } from "react";

type BaseMessageWrapperProps = {
    children?: ReactNode;
    className?: string;
};

export const BaseMessageWrapper: React.FC<BaseMessageWrapperProps> = ({
    children,
    className = "",
}) => (
    <div
        className={`flex flex-row items-start gap-2 max-w-[45rem] w-full mx-auto px-4 ${className}`}
    >
        {children}
    </div>
);

export default BaseMessageWrapper;
