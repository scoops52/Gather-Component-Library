import styled from "styled-components";

export const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 16px;
    border-radius: 50px;
    background: ${props => props.theme.colors.neutralColor00};
    flex: 1;
    cursor: text;
    max-width: 50%
`;

export const SearchInput = styled.input`
    background: none;
    border: none;
    font-size: 14px;
    font-weight: 500;
    color: ${props => props.theme.colors.neutralColor40};
    outline: none;
`