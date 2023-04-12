import styled from "styled-components";

export const CopyrightBarContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid ${props => props.theme.colors.neutralColor40};
    margin-top: 1rem;
`

export const CopyrightBarSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${props => props.theme.colors.darkBlue80}
`

