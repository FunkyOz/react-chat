import React, { ReactNode } from "react";

type CodeContainerProps = {
    children?: ReactNode;
    className?: string;
};

export const CodeContainer: React.FC<CodeContainerProps> = ({
    children,
    className = "",
}) => (
    <div
        className={`bg-[#f9f9f9] rounded-lg border border-[#e0e0e0] [&>.code-block]:p-4! [&>.code-block]:rounded-lg [&>.code-block]:bg-transparent! ${className}`}
    >
        {children}
    </div>
);

export default CodeContainer;
