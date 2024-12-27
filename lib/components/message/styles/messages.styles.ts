import styled, { keyframes } from "styled-components";
import { withDevClassName } from "../../../utils";

const BaseMessageWrapper = styled.div.attrs(
    withDevClassName("message-wrapper")
)`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 0.5rem;
    max-width: 45rem;
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;
`;

export const UserMessageWrapper = styled(BaseMessageWrapper).attrs(
    withDevClassName("user-message-wrapper")
)`
    justify-content: flex-end;
`;

export const IconWrapper = styled.div.attrs(withDevClassName("icon-wrapper"))`
    background-color: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 50%;
    padding: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 2rem;
    min-height: 2rem;
`;

export const AssistantMessageWrapper = styled(BaseMessageWrapper).attrs(
    withDevClassName("assistant-message-wrapper")
)`
    justify-content: flex-start;

    ${IconWrapper} svg {
        width: 1.75rem;
        height: 1.75rem;
        color: #666;
    }
`;

const BaseMessageContent = styled.div.attrs(
    withDevClassName("message-content")
)`
    border-radius: 0.75rem;
    max-width: 80%;
    position: relative;
`;

export const UserMessageContent = styled(BaseMessageContent).attrs(
    withDevClassName("user-message-content")
)<{ $color?: string }>`
    background-color: ${({ $color }) => $color || "#2563eb"};
    color: #ffffff;
    padding: 0.75rem 1rem;
`;

export const AssistantMessageContent = styled(BaseMessageContent).attrs(
    withDevClassName("assistant-message-content")
)`
    color: #000000;
    white-space: normal;
`;

const pulse = keyframes`
    0%, 80%, 100% { transform: scale(1); }
    40% { transform: scale(0.6); }
`;

export const LoadingCircle = styled.div.attrs(
    withDevClassName("loading-circle")
)`
    display: flex;
    gap: 0.5rem;
    padding: 0.25rem;

    &::before,
    &::after,
    & {
        content: "";
        width: 0.5rem;
        height: 0.5rem;
        background-color: #000000;
        border-radius: 50%;
        animation: ${pulse} 1.4s infinite ease-in-out both;
    }

    &::before {
        animation-delay: -0.32s;
    }

    & {
        animation-delay: -0.16s;
    }
`;

export const MessagesWrapper = styled.div.attrs(
    withDevClassName("messages-wrapper")
)<{ $isWithHeader?: boolean }>`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 1rem;
    position: relative;
    width: 100%;
    padding-top: ${({ $isWithHeader }) => ($isWithHeader ? "1rem" : "0")};
`;

export const MessagesHeader = styled.div.attrs(
    withDevClassName("messages-header")
)<{ $isSidebarOpen?: boolean }>`
    display: flex;
    align-items: center;
    padding: 1rem ${({ $isSidebarOpen }) => (!$isSidebarOpen ? "4rem" : "1rem")};
    min-height: 3.75rem;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background: #ffffff;
`;

export const BottomHelper = styled.div`
    height: 0;
`;
