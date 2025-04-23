import React, { ReactNode } from "react";

type LoadingCircleProps = {
    children?: ReactNode;
    className?: string;
};

export const LoadingCircle: React.FC<LoadingCircleProps> = ({
    className = "",
}) => (
    <div className={`flex gap-2 p-1 ${className}`}>
        <div className="w-2 h-2 bg-black rounded-full animate-pulse-loading"></div>
        <div className="w-2 h-2 bg-black rounded-full animate-pulse-loading delay-[0.16s]"></div>
        <div className="w-2 h-2 bg-black rounded-full animate-pulse-loading delay-[0.32s]"></div>
    </div>
);

export default LoadingCircle;
