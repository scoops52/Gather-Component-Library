import styled from "styled-components";

export const SignUpContainer = styled.div`
    display: flex;
    background-color: ${props => props.theme.colors.primary};
    padding: 1rem;
    align-items: center;
    border-radius: 5px;
`

export const SignUpText = styled.h1`
    font-size: 24px;
    font-weight: 700;
    color: ${props => props.theme.colors.neutralColor00}
`

