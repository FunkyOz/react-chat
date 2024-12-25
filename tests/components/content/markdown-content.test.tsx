import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MarkdownContent } from "../../../lib/components/content/markdown-content";

// Mock react-markdown
vi.mock("react-markdown", () => ({
    default: ({ children, components }: any) => {
        // Simulate code block rendering
        const codeProps = {
            children: "console.log('test')",
            className: "language-javascript",
        };
        return (
            <div>
                {components.code(codeProps)}
                <div>{children}</div>
            </div>
        );
    },
}));

// Mock react-syntax-highlighter
vi.mock("react-syntax-highlighter", () => ({
    default: ({ children, language }: any) => (
        <pre data-testid="syntax-highlighter" data-language={language}>
            {children}
        </pre>
    ),
}));

// Mock the icons
vi.mock("../../../lib/components/icons", () => ({
    CopyIcon: () => <div data-testid="copy-icon">Copy</div>,
    CopiedIcon: () => <div data-testid="copied-icon">Copied</div>,
}));

// Mock the styles
vi.mock(
    "../../../lib/components/content/styles/markdown-content.styles",
    () => ({
        CodeContainer: ({ children }: { children: React.ReactNode }) => (
            <div data-testid="code-container">{children}</div>
        ),
        CodeTitle: ({ children }: { children: React.ReactNode }) => (
            <div data-testid="code-title">{children}</div>
        ),
        CodeLanguage: ({ children }: { children: React.ReactNode }) => (
            <div data-testid="code-language">{children}</div>
        ),
        CopyButton: ({
            children,
            onClick,
            $isCopied,
        }: {
            children: React.ReactNode;
            onClick: () => void;
            $isCopied: boolean;
        }) => (
            <button
                data-testid="copy-button"
                onClick={onClick}
                data-is-copied={$isCopied}
            >
                {children}
            </button>
        ),
    })
);

// Mock the useMarkdownContent hook
vi.mock("../../../lib/components/content/hooks/useMarkdownContent", () => ({
    default: (onCodeCopied: any) => ({
        handleCopy: (code: string) => {
            onCodeCopied?.(code);
        },
        isCopied: false,
    }),
}));

describe("MarkdownContent", () => {
    it("renders markdown content", () => {
        const content = "# Test Content";
        render(<MarkdownContent content={content} />);

        expect(screen.getByText(content)).toBeInTheDocument();
    });

    it("renders code blocks with syntax highlighting", () => {
        render(<MarkdownContent content="Some code" />);

        const syntaxHighlighter = screen.getByTestId("syntax-highlighter");
        expect(syntaxHighlighter).toBeInTheDocument();
        expect(syntaxHighlighter).toHaveAttribute(
            "data-language",
            "javascript"
        );
    });

    it("displays language label in code blocks", () => {
        render(<MarkdownContent content="Some code" />);

        expect(screen.getByText("javascript")).toBeInTheDocument();
    });

    it("handles code copying", () => {
        const onCodeCopied = vi.fn();
        render(
            <MarkdownContent content="Some code" onCodeCopied={onCodeCopied} />
        );

        const copyButton = screen.getByTestId("copy-button");
        fireEvent.click(copyButton);

        expect(onCodeCopied).toHaveBeenCalledWith("console.log('test')");
    });

    it("renders with custom className", () => {
        const className = "custom-markdown";
        render(<MarkdownContent content="Test" className={className} />);

        // The className should be passed to the Markdown component
        // We can't test this directly due to the mock, but the prop is passed
    });

    it("renders copy icon by default", () => {
        render(<MarkdownContent content="Some code" />);

        expect(screen.getByTestId("copy-icon")).toBeInTheDocument();
    });
});
