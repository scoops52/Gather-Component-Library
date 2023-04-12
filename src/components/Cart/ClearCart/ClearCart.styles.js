import styled from "styled-components";

export const ModalContainer = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const Modal = styled.div`
    box-sizing: border-box;
    width: 40%;
    height: 30%;
    background-color: ${props => props.theme.colors.neutralColor10};
    border-radius: 50px;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;
`
export const ModalSectionWrapper = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    gap: 20px;
`
