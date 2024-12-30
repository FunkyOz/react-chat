import styled from "styled-components";

export const SidebarItemContainer = styled.div`
    padding: 0 0.75rem;
    background-color: transparent;
`;

export const SidebarItemContent = styled.div<{ $isActive?: boolean }>`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 0.5rem;
    padding: 0.5rem;
    cursor: pointer;
    background-color: ${({ $isActive }) =>
        $isActive ? "#e3e3e3" : "transparent"};

    &:hover {
        background-color: #ececec;
    }
`;
