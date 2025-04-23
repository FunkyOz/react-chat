import React, { ReactNode } from "react";

type BottomHelperProps = {
    children?: ReactNode;
    className?: string;
};

export const BottomHelper: React.FC<BottomHelperProps> = ({
    className = "",
}) => <div className={`h-0 ${className}`}></div>;

export default BottomHelper;
