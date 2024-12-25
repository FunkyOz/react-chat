import { useState, useRef, ChangeEvent, KeyboardEvent, useEffect } from "react";

type UseMessageInputReturn = {
    message: string;
    textareaRef: React.RefObject<HTMLTextAreaElement>;
    handleSend: () => void;
    handleKeyDown: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
    handleInput: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

type UseMessageInputProps = {
    onSend?: (message: string) => void;
    value?: string;
    withAutoFocus?: boolean;
};

export const useMessageInput = ({
    onSend,
    value = "",
    withAutoFocus = false,
}: UseMessageInputProps): UseMessageInputReturn => {
    const [message, setMessage] = useState(value);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        setMessage(value);
    }, [value]);

    // Handle initial focus only
    useEffect(() => {
        if (withAutoFocus && textareaRef.current) {
            textareaRef.current.focus();
        }
    }, []);

    const handleSend = () => {
        if (message.trim() && onSend) {
            onSend(message.trim());
            setMessage("");
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            if (e.shiftKey) {
                // Allow new line with Shift+Enter
                return;
            }

            e.preventDefault();
            if (message.trim()) {
                handleSend();
            }

            if (textareaRef.current) {
                textareaRef.current.style.height = "1.5rem";
            }
        }
    };

    const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
        if (textareaRef.current) {
            textareaRef.current.style.height = "1.5rem";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };

    return {
        message,
        textareaRef,
        handleSend,
        handleKeyDown,
        handleInput,
    };
};
