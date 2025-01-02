import React, { ReactNode, ReactElement, useMemo } from "react";
import { Sidebar } from "../../../components/sidebar/sidebar";
import { MessageInput } from "../../../components/message/message-input";
import { Messages } from "../../../components/message/messages";

type UseChatReturn = {
    sidebar: ReactNode;
    messageInput: ReactNode;
    messages: ReactNode;
    others: ReactNode[];
};

type UseChatProps = {
    children: ReactNode;
};

const isSidebarElement = (child: ReactNode): child is ReactElement => {
    return React.isValidElement(child) && child.type === Sidebar;
};

const isMessageInputElement = (child: ReactNode): child is ReactElement => {
    return React.isValidElement(child) && child.type === MessageInput;
};

const isMessagesElement = (child: ReactNode): child is ReactElement => {
    return React.isValidElement(child) && child.type === Messages;
};

export const useChat = ({ children }: UseChatProps): UseChatReturn => {
    const childrenAsArray = useMemo(() => {
        return Array.isArray(children) ? children : [children];
    }, [children]);

    const sidebar = useMemo(() => {
        return childrenAsArray.find(isSidebarElement);
    }, [childrenAsArray]);

    const messageInput = useMemo(() => {
        return childrenAsArray.find(isMessageInputElement);
    }, [childrenAsArray]);

    const messages = useMemo(() => {
        return childrenAsArray.find(isMessagesElement);
    }, [childrenAsArray]);

    const others = useMemo(() => {
        return childrenAsArray.filter(
            (child) =>
                !isSidebarElement(child) &&
                !isMessageInputElement(child) &&
                !isMessagesElement(child)
        );
    }, [childrenAsArray]);

    return {
        sidebar,
        messageInput,
        messages,
        others,
    };
};
