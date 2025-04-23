import React, { ReactNode } from "react";
import BaseMessageWrapper from "./base-message-wrapper";

type UserMessageWrapperProps = {
    children?: ReactNode;
    className?: string;
};

export const UserMessageWrapper: React.FC<UserMessageWrapperProps> = ({
    children,
    className = "",
}) => (
    <BaseMessageWrapper className={`justify-end ${className}`}>
        {children}
    </BaseMessageWrapper>
);

export default UserMessageWrapper;
