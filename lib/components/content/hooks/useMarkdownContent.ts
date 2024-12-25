import { useCallback, useEffect, useState } from "react";

const useMarkdownContent = (onCodeCopied?: (code: string) => void) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = useCallback(
        async (code: string) => {
            if (isCopied) {
                return;
            }
            try {
                await navigator.clipboard.writeText(code);
                if (onCodeCopied) {
                    onCodeCopied(code);
                }
                setIsCopied(true);
            } catch (err) {
                console.error("Failed to copy: ", err);
            }
        },
        [onCodeCopied, isCopied]
    );

    useEffect(() => {
        if (isCopied) {
            const timeout = setTimeout(() => setIsCopied(false), 5000);
            return () => clearTimeout(timeout);
        }
    }, [isCopied]);

    return { handleCopy, isCopied };
};

export default useMarkdownContent;
