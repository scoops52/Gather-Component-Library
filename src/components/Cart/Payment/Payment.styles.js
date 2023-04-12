import styled from "styled-components";

export const PaymentContainer = styled.div`
    width: 40%;
    
    background: ${props => props.theme.colors.darkBlue60};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: space-around;
    align-items: center;
    gap: 30px;
    
    & > * {
        max-width: 100%;
    }
`