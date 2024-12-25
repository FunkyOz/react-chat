import styled from "styled-components";

export const ChatWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
`;

export const ChatContent = styled.div`
    display: flex;
    flex: 1;
    overflow: hidden;
`;

export const ChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
    height: 100%;
    overflow-y: auto;
    background-color: #ffffff;
`;
