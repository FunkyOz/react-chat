import React, { ReactNode } from "react";

type CodeLanguageProps = {
    children?: ReactNode;
    className?: string;
};

export const CodeLanguage: React.FC<CodeLanguageProps> = ({
    children,
    className = "",
}) => (
    <div
        className={`leading-none bg-transparent text-[#5d5d5d] text-xs select-none ${className}`}
    >
        {children}
    </div>
);

export default CodeLanguage;
