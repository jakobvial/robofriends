import styled from "styled-components";

export const ScrollContainer = styled.div`
    overflow: auto;
    height: 70vh;
		border: 1px solid black;
    margin: 1rem 2rem;
    border-radius: 1rem;
    padding: 1rem;

    &::-webkit-scrollbar {
        width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
        background: #888;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;
