import Link from "next/link";
import styled from "styled-components";

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 5px;
    margin: 0 auto;
`
export const CartHeader = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-bottom: solid 1px ${props=> props.theme.colors.neutralColor40};
    padding: 10px;
`

export const CartTitle = styled.h1`
    color: ${props => props.theme.colors.primary};
    font-size: 24px;
    font-weight: 700;
    align-self: center;
`

export const ContinueShoppingLink = styled(Link)`
    display: flex;
    align-items: center;
    color: ${props=> props.theme.colors.neutralColor100};
    font-size: 18px;
    text-decoration: none;
    font-weight: 700;
    gap: 10px
`

export const CartInfo = styled.div`
     display: flex;
     flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 5px;
    background-color: ${props=> props.theme.colors.neutralColor20};
    border: 1px solid ${props=> props.theme.colors.neutralColor20};
    box-shadow: 0px 1px 4px rgba(0,0,0,0.25);
    border-radius: 15px;
`

export const CartTotals = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 20%;
    padding: 10px 5px;
    background-color: ${props=> props.theme.colors.darkBlue40};
    border: 1px solid ${props=> props.theme.colors.neutralColor20};
    box-shadow: 0px 1px 4px rgba(0,0,0,0.25);
    border-radius: 15px;
`

export const CartButtons = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 20%;
    padding: 10px 5px;
`