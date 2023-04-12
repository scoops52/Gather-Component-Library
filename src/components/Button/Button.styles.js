import styled, {css} from "styled-components";


export const ButtonStyled = styled.button`
   padding: ${props => props.large ? '15px 25px' : '10px 20px' };
   font-size: ${props => props.large ?' 16px' : '14px' };
   font-weight: 500;
   color: ${props => props.theme.colors.neutralColor00};
   background-color: ${props => props.theme.colors.primary};
   border: none;
   border-radius: 40px;
   cursor: pointer;
   max-width: 200px;

   &:hover {
    background-color: ${props => props.theme.colors.darkBlue40};
   }

   &:active {
    border: 1px solid ${props => props.theme.colors.darkBlue40};
   }

   ${props => props.outline && css`
        background-color: transparent;
        color: ${props.theme.colors.primary};
        border: 1px solid ${props.theme.colors.primary};
   `}

   ${props => props.disabled && css`
        background-color: ${props.theme.colors.neutralColor20};
        color: ${props.theme.colors.neutralColor60};
        cursor: not-allowed;
   `}

`;