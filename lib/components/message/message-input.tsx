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
import useClassNames from "../../hooks/useClassNames";

export const MessageInput: React.FC<MessageInputProps> = ({
    placeholder = "Type a message...",
    onSend,
    className,
    value = "",
    sendIcon = <SendIcon />,
    withAutoFocus = false,
    classNames,
}) => {
    const classes = useClassNames({ className, classNames });
    const { message, textareaRef, handleInput, handleKeyDown, handleSend } =
        useMessageInput({
            onSend: onSend || (() => {}),
            value,
            withAutoFocus,
        });
    const {
        state: { isSidebarOpen },
    } = useChatProvider();

    return (
        <MessageInputWrapper className={classes.base}>
            <MessageInputContainer
                className={classes.container}
                $isSidebarOpen={isSidebarOpen}
            >
                <Textarea
                    ref={textareaRef}
                    value={message}
                    onChange={handleInput}
                    onKeyDown={handleKeyDown}
                    placeholder={placeholder}
                    className={classes.textarea}
                />
                <SendButton
                    className={classes.sendButton}
                    onClick={handleSend}
                    disabled={!message.trim()}
                >
                    {sendIcon}
                </SendButton>
            </MessageInputContainer>
        </MessageInputWrapper>
    );
};

MessageInput.displayName = "MessageInput";
