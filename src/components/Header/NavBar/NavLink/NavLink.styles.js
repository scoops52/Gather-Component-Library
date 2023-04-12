import Link from "next/link";
import styled, {css} from "styled-components";

export const NavLinkStyled = styled(Link)`
    color: ${props => props.theme.colors.primary};
    font-weight: 700;
    font-size: 16px;
    text-decoration: none;

    &:hover {
        color: ${props => props.theme.colors.darkBlue40};
    }

    &.active {
        color: ${props => props.theme.colors.neutralColor60};
    }
`;