import styled from "styled-components";

export const CodeContainer = styled.div`
    background-color: #f9f9f9;
    border-radius: 0.5rem;
    border: 1px solid #e0e0e0;

    & > .code-block {
        padding: 1rem !important;
        border-radius: 0.5rem;
        background-color: transparent !important;
    }
`;

export const CodeTitle = styled.div`
    padding: 0.5rem 1rem;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CodeLanguage = styled.div`
    line-height: 1;
    background-color: transparent;
    color: #5d5d5d;
    font-size: 0.75rem;
    user-select: none;
`;

export const CodeCopyButton = styled.button<{ $isCopied?: boolean }>`
    background-color: transparent;
    color: #5d5d5d;
    border: none;
    cursor: ${({ $isCopied }) => ($isCopied ? "default" : "pointer")};
    display: flex;
    align-items: center;
`;
