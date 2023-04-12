import { ProductName, ProductPrice } from "../../ProductCard/ProductCard.styles";
import styled from "styled-components";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export const CartItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 5px;
    background-color: ${props=> props.theme.colors.neutralColor10};
    border: 1px solid ${props=> props.theme.colors.neutralColor20};
    box-shadow: 0px 1px 4px rgba(0,0,0,0.25);
    border-radius: 15px;
`;

export const CartItemTitle = styled.div`
 display: flex;
 width: 50%;
 align-items: center;
 gap: 60px;
`

export const CartItemImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;
`;

export const CartItemName = styled(Link)`
    color: ${props => props.theme.colors.primary};
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
`
export const CartItemInfo = styled.div`
     display: flex;
    width: 50%;
    justify-content: flex-end;
    align-items: center;
    padding: 0 30px;
    gap: 40px;
`
export const CartItemPrice = styled(ProductPrice)`
    font-size: 24px;
`

export const ClearItem = styled.button`
    color: ${props => props.theme.colors.neutralColor60};
    font-size: 24px;
    border: none;
    cursor: pointer;
`
