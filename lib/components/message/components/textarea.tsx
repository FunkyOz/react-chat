import React, { TextareaHTMLAttributes } from "react";

type TextareaProps = {
    className?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className = "", ...props }, ref) => (
        <textarea
            ref={ref}
            className={`flex-1 h-6 min-h-6! max-h-50 p-0 border-none bg-transparent resize-none font-inherit text-sm leading-5 overflow-y-auto box-border focus:outline-none placeholder:text-[#9ca3af] ${className}`}
            {...props}
        />
    )
);

Textarea.displayName = "Textarea";

export default Textarea;
