import Input from "../../../Input/Input";
import styled from "styled-components";

export const SignUpInputWrapper = styled.div`
    display: flex;
    min-width: 60%;
    height: 10%;
    justify-content: space-between;
    gap: 10px;
    padding: 0.5rem;
    background-color: ${props => props.theme.colors.neutralColor00};
    border-radius: 5px;
`

export const SignUpInputBar = styled.input`
    border: 1px solid ${props => props.theme.colors.neutralColor40};
    border-radius: 5px;
    width: 100%;
    font-size: 18px;
    font-weight: 500;
    color: ${props => props.theme.colors.neutralColor80};
`
