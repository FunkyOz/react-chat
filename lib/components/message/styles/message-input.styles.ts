import styled from "styled-components";

export const MessageInputWrapper = styled.div`
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
    background: #ffffff;
    padding: 0 1rem 1rem 1rem;
    z-index: 10;
`;

export const MessageInputContainer = styled.div<{ $isSidebarOpen: boolean }>`
    display: flex;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    background: #f3f3f3;
    align-items: center;
    max-width: 45rem;
    margin: 0 auto;
    box-sizing: border-box;
    transition: width 0.3s ease;
    width: 100%;
    border-radius: 0.75rem;
`;

export const Textarea = styled.textarea`
    flex: 1;
    height: 1.5rem;
    min-height: 1.5rem !important;
    max-height: 12.5rem;
    padding: 0;
    border: none;
    background: transparent;
    resize: none;
    font-family: inherit;
    font-size: 0.875rem;
    line-height: 1.25rem;
    overflow-y: auto;
    box-sizing: border-box;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: #9ca3af;
    }
`;

export const SendButton = styled.button`
    width: 2rem;
    height: 2rem;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: #000000;
    border: none;
    border-radius: 0.375rem;
    font-size: 1.25rem;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }

    &:disabled {
        color: #9ca3af;
        cursor: not-allowed;
    }
`;
