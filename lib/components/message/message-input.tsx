import React from "react";
import {
    MessageInputContainer,
    MessageInputWrapper,
    SendButton,
    Textarea,
} from "./styles/message-input.styles";
import { useMessageInput } from "./hooks/useMessageInput";
import { SendIcon } from "../icons";
import { MessageInputProps } from "../../types";
import { useChatProvider } from "../../provider";

export const MessageInput: React.FC<MessageInputProps> = ({
    placeholder = "Type a message...",
    onSend,
    sendIcon,
    value = "",
    className,
}) => {
    const { message, textareaRef, handleInput, handleKeyDown, handleSend } =
        useMessageInput({
            onSend: onSend || (() => {}),
            value,
        });
    const {
        state: { isSidebarOpen },
    } = useChatProvider();

    return (
        <MessageInputWrapper className={className}>
            <MessageInputContainer $isSidebarOpen={isSidebarOpen}>
                <Textarea
                    ref={textareaRef}
                    value={message}
                    onChange={handleInput}
                    onKeyDown={handleKeyDown}
                    placeholder={placeholder}
                />
                <SendButton onClick={handleSend} disabled={!message.trim()}>
                    {sendIcon || <SendIcon />}
                </SendButton>
            </MessageInputContainer>
        </MessageInputWrapper>
    );
};

MessageInput.displayName = "MessageInput";
