import styled, {css} from "styled-components";


export const ButtonStyled = styled.button`
   padding: 10px 20px;
   font-size: 11.5px;
   font-weight: 500;
   color: ${props => props.theme.colors.neutralColor00};
   background-color: ${props => props.theme.colors.primary};

   ${props => props.outline && css`
        background-color: transparent;
        color: ${props.theme.colors.primary};
        border: 1px solid ${props.theme.color.primary};
   `}

   ${props => props.disabled && css`
        background-color: ${props.theme.colors.neutralColor20};
        color: ${props.theme.colors.neutralColor60};
        cursor: not-allowed;
   `}

`;