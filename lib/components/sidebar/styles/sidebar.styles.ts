import styled from "styled-components";

export const SidebarWrapper = styled.div`
    position: fixed;
    left: 0;
    height: 100%;
    background: transparent;
    z-index: 30;
`;

export const SidebarContainer = styled.div<{
    $isOpen?: boolean;
    $size?: number;
    $isMobile?: boolean;
}>`
    width: ${({ $isOpen, $size = 16 }) => ($isOpen ? `${$size}rem` : "0")};
    background: #f9f9f9;
    overflow: hidden;
    transition: width ${({ $isMobile }) => ($isMobile ? "0.1s" : "0.3s")} ease;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: 4rem;
    ${({ $isMobile }) =>
        $isMobile &&
        `
            position: absolute;
            z-index: 30;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        `}
`;

export const SidebarContent = styled.div<{ $size?: number }>`
    width: ${({ $size }) => `${$size}rem`};
    height: 100%;
    overflow-y: auto;
`;

export const SidebarHeader = styled.div<{
    $withToggle?: boolean;
    $isOpen: boolean;
}>`
    display: flex;
    align-items: center;
    padding: 0 1rem 0 ${({ $withToggle }) => ($withToggle ? "4rem" : "1rem")};
    background: #f9f9f9;
    position: absolute;
    min-height: 3.75rem;
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

export const ToggleButton = styled.button<{ $isOpen: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border: none;
    border-radius: 0.375rem;
    background: transparent;
    cursor: pointer;
    color: #000000;
    position: absolute;
    top: 0.75rem;
    left: 1rem;
    z-index: 40;
    transform: ${({ $isOpen }) =>
        $isOpen ? "rotate(-180deg)" : "rotate(0deg)"};
    transition: all 0.3s ease;

    &:hover {
        background: rgba(0, 0, 0, 0.1);
    }
`;
