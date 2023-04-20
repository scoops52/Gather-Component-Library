import styled from "styled-components";

export const ProductsGridContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const GridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
`

export const ProductsGridTitle = styled.h1`
    color: ${props => props.theme.colors.primary};
    font-size: 64px;
`