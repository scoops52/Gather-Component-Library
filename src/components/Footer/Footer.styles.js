import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 3rem;
    padding-bottom: 1rem;
    background-color: ${props => props.theme.colors.secondary};

`