import { MarkdownContentProps } from "../../types";
import Markdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
    CodeContainer,
    CodeCopyButton,
    CodeLanguage,
    CodeTitle,
} from "./styles/markdown-content.styles";
import { CopyIcon, CopiedIcon } from "../icons";
import useMarkdownContent from "./hooks/useMarkdownContent";

/**
 * A component that renders markdown content with proper styling
 */
export const MarkdownContent = ({
    content,
    className,
    onCodeCopied,
}: MarkdownContentProps) => {
    const { handleCopy, isCopied } = useMarkdownContent(onCodeCopied);

    return (
        <Markdown
            className={className}
            components={{
                code({ children, className }) {
                    const match = /language-(\w+)/.exec(className || "");
                    const codeString = String(children).replace(/\n$/, "");

                    return (
                        <CodeContainer>
                            <CodeTitle>
                                <CodeLanguage>
                                    {match ? match[1] : "plain"}
                                </CodeLanguage>
                                <CodeCopyButton
                                    $isCopied={isCopied}
                                    onClick={() => handleCopy(codeString)}
                                >
                                    {isCopied ? <CopiedIcon /> : <CopyIcon />}
                                </CodeCopyButton>
                            </CodeTitle>
                            {match ? (
                                <SyntaxHighlighter
                                    language={match[1] as string}
                                    PreTag="div"
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
