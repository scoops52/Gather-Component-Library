import styled, {css} from "styled-components";

export const InputStyled = styled.input`
    background: ${props => props.theme.colors.neutralColor10};
    border: none;
    font-size: 16px;
    font-weight: 500;
    color: ${props => props.theme.colors.neutralColor100};
    outline: none;
    padding: 5px;
    border-radius: 5px;

    ::placeholder {
        color: ${props => props.theme.colors.neutralColor60}
    }

    ${props => props.glass && css`
        background: linear-gradient(145.36deg, rgba(244, 244, 244, 0.4) -4.23%, rgba(244, 244, 244, 0.2) 102.58%);
        backdrop-filter: blur(10px);
   `}
`