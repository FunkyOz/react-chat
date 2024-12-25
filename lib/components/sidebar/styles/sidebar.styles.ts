import styled from "styled-components";
import { withDevClassName } from "../../../utils";

export const SidebarWrapper = styled.div.attrs(
    withDevClassName("sidebar-wrapper")
)<{ $isOpen: boolean }>`
    position: relative;
    height: 100%;
    background: transparent;
    border-right: ${({ $isOpen }) =>
        $isOpen ? "0.0625rem solid #e5e7eb" : "none"};
`;

export const SidebarContainer = styled.div.attrs(
    withDevClassName("sidebar-container")
)<{ $isOpen?: boolean; $size?: number }>`
    width: ${({ $isOpen, $size = 16 }) => ($isOpen ? `"${$size}rem"` : "0")};
    background: #f9f9f9;
    overflow: hidden;
    transition: width 0.3s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const SidebarContent = styled.div.attrs(
    withDevClassName("sidebar-content")
)<{ $size?: number }>`
    width: ${({ $size }) => `${$size}rem`};
    height: 100%;
    overflow-y: auto;
    padding-top: 5.25rem;
`;

export const SidebarHeader = styled.div.attrs(
    withDevClassName("sidebar-header")
)<{ $withToggle?: boolean; $isOpen: boolean }>`
    display: flex;
    align-items: center;
    padding: 1.5rem 1rem 1.5rem
        ${({ $withToggle }) => ($withToggle ? "4rem" : "1rem")};
    border-bottom: 0.0625rem solid #e5e7eb;
    background: #f9f9f9;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    transition: opacity 0.2s ease;

    h2 {
        margin: 0;
        font-size: 1.125rem;
        font-weight: 600;
        color: #111827;
    }
`;

export const ToggleButton = styled.button.attrs(
    withDevClassName("toggle-button")
)<{ $isOpen: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border: none;
    border-radius: 0.375rem;
    background: transparent;
    cursor: pointer;
    font-size: 1.125rem;
    color: #000000;
    position: absolute;
    top: 1.3125rem;
    left: 1rem;
    z-index: 20;
    transform: ${({ $isOpen }) =>
        $isOpen ? "rotate(-180deg)" : "rotate(0deg)"};
    transition: all 0.3s ease;

    &:hover {
        background: rgba(0, 0, 0, 0.1);
    }
`;
