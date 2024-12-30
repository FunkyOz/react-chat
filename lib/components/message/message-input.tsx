import React from "react";
import {
    TextareaContainer,
    MessageInputWrapper,
    SendButton,
    Textarea,
    MessageInputContainer,
} from "./styles/message-input.styles";
import { useMessageInput } from "./hooks/useMessageInput";
import { SendIcon } from "../icons";
import { MessageInputProps } from "../../types";
import useClassNames from "../../hooks/useClassNames";

export const MessageInput: React.FC<MessageInputProps> = ({
    placeholder = "Type a message...",
    onSend,
    onChange,
    className,
    value = "",
    sendIcon = <SendIcon />,
    withAutoFocus = false,
    classNames,
    bottomContent,
}) => {
    const classes = useClassNames({ className, classNames });
    const { message, textareaRef, handleInput, handleKeyDown, handleSend } =
        useMessageInput({
            onSend: onSend || (() => {}),
            onChange: onChange || (() => {}),
            value,
            withAutoFocus,
        });

    return (
        <MessageInputWrapper className={classes.base}>
            <MessageInputContainer className={classes.container}>
                <TextareaContainer className={classes.textareaContainer}>
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
                </TextareaContainer>
                {bottomContent}
            </MessageInputContainer>
        </MessageInputWrapper>
    );
};

MessageInput.displayName = "MessageInput";
