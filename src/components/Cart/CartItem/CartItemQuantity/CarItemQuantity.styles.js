import styled from "styled-components";

export const QuantityWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const QuantityNumber = styled.p`
    color: ${props=> props.theme.colors.neutralColor100};
    font-size: 24px;
    margin-right: 16px;
    position: relative;
    left: 20px;
    top: 5px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const QuantityBtn = styled.button`
    color: ${props=> props.theme.colors.neutralColor60};
    height: 16px;
    font-size: 24px;
    border: none;
    padding: 0;
    margin: 0 8px;
    cursor: pointer;

`;
