import React, { ReactNode } from "react";

type IconContainerProps = {
    children?: ReactNode;
    className?: string;
};

export const IconContainer: React.FC<IconContainerProps> = ({
    children,
    className = "",
}) => (
    <div className={`inline-flex items-center justify-center ${className}`}>
        {children}
    </div>
);

export default IconContainer;
