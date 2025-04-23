import React, { ReactNode } from "react";

type CodeTitleProps = {
    children?: ReactNode;
    className?: string;
};

export const CodeTitle: React.FC<CodeTitleProps> = ({
    children,
    className = "",
}) => (
    <div
        className={`py-2 px-4 bg-transparent flex justify-between items-center ${className}`}
    >
        {children}
    </div>
);

export default CodeTitle;
