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
    onChange?: (message: string) => void;
    value?: string;
    withAutoFocus?: boolean;
};

export const useMessageInput = ({
    onSend,
    onChange,
    value = "",
    withAutoFocus = false,
}: UseMessageInputProps): UseMessageInputReturn => {
    const [message, setMessage] = useState(value);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        setMessage(value);
    }, [value]);

    useEffect(() => {
        if (onChange) {
            onChange(message);
        }
    }, [message]);

    useEffect(() => {
        if (withAutoFocus && textareaRef.current) {
            textareaRef.current.focus();
        }
    }, []);

    const handleSend = () => {
        const m = message.trim();
        if (m && onSend) {
            onSend(m);
            setMessage("");
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            if (e.shiftKey) {
                return;
            }

            e.preventDefault();
            handleSend();

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
