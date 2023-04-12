import styled from "styled-components";
import Image from "next/image";

export const CreditCardTypeWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    background: none;
    align-items: center;
    flex-wrap: wrap;
`

export const CardTypeLogo = styled(Image)`
    background: rgba(217, 217, 217, 0.2);
    border-radius: 5px;
    cursor: pointer;
    /* flex-shrink: 1; */
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
`;

CardTypeLogo.defaultProps = {
  width: 75,
  height: 55,
};
