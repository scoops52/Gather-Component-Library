import Link from "next/link";
import styled from "styled-components";

export const CardWrapper = styled(Link)`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.colors.neutralColor00};
    border-radius: 12px;
    padding: 10px;
    text-decoration: none;
    box-shadow: 0 4px 28px -2px rgba(0, 0, 0, 0.8);
    cursor: pointer;
    transition: transform 0.3s;

    &:hover {
        transform: translateY(-5px);
    }

`

export const ProductImage = styled.img`
    border-radius: 12px;
    display: block;
    max-width: 260px;
    max-height: 260px;
`

export const ProductInfo = styled.div`
    margin-top: 10px;
    padding: 10px;
    margin-bottom: 15px;
    display: flex;
    flex: 1 1;
    flex-direction: column;
    
`

export const ProductName = styled.h4`
    font-size: 16px;
    margin: 5px 0;
    color: ${props => props.theme.colors.neutralColor100};
    
`

export const ProductDetails = styled.h5`
    font-size: 12px;
    margin: 5px 0;
    color: ${props => props.theme.colors.neutralColor60};
`

export const ProductPrice = styled.p`
    font-size: 14px;
    font-weight: 700;
    margin: 5px 0;
    color: ${props => props.theme.colors.neutralColor100};
`