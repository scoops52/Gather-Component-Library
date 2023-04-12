import styled from "styled-components";

export const CardInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    /* max-width: 100%; */
`
export const InputLabel =styled.label`
    font-size: 16px;
    color: ${props => props.theme.colors.nuetralColor00};
    display: flex;
`

export const SharedInputWrapper = styled.div`
    display: flex;
    /* flex-direction: row; */
    flex-wrap: wrap;
    
    gap: 10px;
`