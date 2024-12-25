import styled from "styled-components";
import { withDevClassName } from "../../../utils";

export const SidebarItemContainer = styled.div.attrs(
    withDevClassName("sidebar-item-container")
)`
    padding: 0 0.75rem;
    background-color: transparent;
`;

export const SidebarItemContent = styled.div.attrs(
    withDevClassName("sidebar-item-content")
)<{ $isActive?: boolean }>`
    border-radius: 0.5rem;
    padding: 0.5rem;
    cursor: pointer;
    background-color: ${({ $isActive }) =>
        $isActive ? "#e3e3e3" : "transparent"};

    &:hover {
        background-color: #ececec;
    }
`;
