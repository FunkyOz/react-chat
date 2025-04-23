import React, { CSSProperties, ReactNode } from "react";

type BaseMessageContentProps = {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
};

export const BaseMessageContent: React.FC<BaseMessageContentProps> = ({
    children,
    className = "",
    style,
}) => (
    <div
        className={`rounded-xl max-w-[80%] relative ${className}`}
        style={style}
    >
        {children}
    </div>
);

export default BaseMessageContent;
