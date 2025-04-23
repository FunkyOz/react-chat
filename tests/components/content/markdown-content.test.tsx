import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { MarkdownContent } from "../../../lib/components/content/markdown-content";

// Mock react-markdown
vi.mock("react-markdown", () => ({
    default: ({ children, components }: any) => {
        // Simulate code block rendering
        const codeProps = {
            children: (
                <pre className="language-javascript">
                    console.log(&apos;test&apos;)
                </pre>
            ),
        };
        return (
            <div>
                {components.pre(codeProps)}
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
vi.mock("../../../lib/components/content/components", () => ({
    CodeContainer: ({
        children,
        className,
    }: {
        children: React.ReactNode;
        className?: string;
    }) => (
        <div data-testid="code-container" className={className}>
            {children}
        </div>
    ),
    CodeTitle: ({
        children,
        className,
    }: {
        children: React.ReactNode;
        className?: string;
    }) => (
        <div data-testid="code-title" className={className}>
            {children}
        </div>
    ),
    CodeLanguage: ({
        children,
        className,
    }: {
        children: React.ReactNode;
        className?: string;
    }) => (
        <div data-testid="code-language" className={className}>
            {children}
        </div>
    ),
    CopyButton: ({
        children,
        onClick,
        isCopied,
        className,
    }: {
        children: React.ReactNode;
        onClick: () => void;
        isCopied: boolean;
        className?: string;
    }) => (
        <button
            data-testid="copy-button"
            onClick={onClick}
            data-is-copied={isCopied}
            className={className}
        >
            {children}
        </button>
    ),
}));

// Create a mock handle copy function
const mockHandleCopy = vi.fn();

// Mock the useMarkdownContent hook
vi.mock("../../../lib/components/content/hooks/useMarkdownContent", () => ({
    default: () => ({
        handleCopy: mockHandleCopy,
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

        // Check for the language in the code language element
        expect(screen.getByTestId("code-language")).toHaveTextContent(
            "javascript"
        );
    });

    it("handles code copying", () => {
        // Reset mock for this test
        mockHandleCopy.mockReset();

        render(<MarkdownContent content="Some code" />);

        const copyButton = screen.getByTestId("copy-button");
        fireEvent.click(copyButton);

        expect(mockHandleCopy).toHaveBeenCalled();
    });

    it("renders copy icon by default", () => {
        render(<MarkdownContent content="Some code" />);

        // The copy icon should be inside the copy button
        const copyButton = screen.getByTestId("copy-button");
        expect(copyButton).toContainElement(screen.getByTestId("copy-icon"));
    });
});
