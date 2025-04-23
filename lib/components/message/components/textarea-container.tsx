import React, { ReactNode } from "react";

type TextareaContainerProps = {
    children?: ReactNode;
    className?: string;
};

export const TextareaContainer: React.FC<TextareaContainerProps> = ({
    children,
    className = "",
}) => (
    <div className={`flex gap-2 items-center bg-[#f3f3f3] w-full ${className}`}>
        {children}
    </div>
);

export default TextareaContainer;
