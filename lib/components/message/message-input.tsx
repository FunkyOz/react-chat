import React from "react";
import useClassNames from "../../hooks/useClassNames";
import { MessageInputProps } from "../../types";
import { SendIcon } from "../icons";
import {
    MessageInputContainer,
    MessageInputWrapper,
    SendButton,
    Textarea,
    TextareaContainer,
} from "./components";
import { useMessageInput } from "./hooks/useMessageInput";

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
