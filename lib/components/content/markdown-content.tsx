import React from "react";
import { MarkdownContentProps } from "../../types";
import Markdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
    CodeContainer,
    CopyButton,
    CodeLanguage,
    CodeTitle,
} from "./styles/markdown-content.styles";
import { CopyIcon, CopiedIcon } from "../icons";
import useMarkdownContent from "./hooks/useMarkdownContent";
import useClassNames from "../../hooks/useClassNames";

/**
 * A component that renders markdown content with proper styling
 */
export const MarkdownContent: React.FC<MarkdownContentProps> = ({
    content,
    className,
    classNames,
    onCodeCopied,
}) => {
    const classes = useClassNames({ className, classNames });

    const { handleCopy, isCopied } = useMarkdownContent(onCodeCopied);

    return (
        <Markdown
            className={classes.base}
            components={{
                pre({ children }: React.ComponentProps<"pre">) {
                    const { className, children: code } = React.isValidElement(
                        children
                    )
                        ? children.props
                        : {};
                    const match = /language-(\w+)/.exec(className ?? "");
                    const codeString = String(code).trim();

                    return (
                        <CodeContainer className={classes.codeContainer}>
                            <CodeTitle className={classes.codeTitle}>
                                <CodeLanguage className={classes.codeLanguage}>
                                    {match ? match[1] : "plain"}
                                </CodeLanguage>
                                <CopyButton
                                    $isCopied={isCopied}
                                    onClick={() => handleCopy(codeString)}
                                    className={classes.copyButton}
                                >
                                    {isCopied ? <CopiedIcon /> : <CopyIcon />}
                                </CopyButton>
                            </CodeTitle>
                            {match ? (
                                <SyntaxHighlighter
                                    language={match[1] as string}
                                    PreTag="pre"
                                    className="code-block"
                                >
                                    {codeString}
                                </SyntaxHighlighter>
                            ) : (
                                <code className={className}>{children}</code>
                            )}
                        </CodeContainer>
                    );
                },
            }}
        >
            {content}
        </Markdown>
    );
};
