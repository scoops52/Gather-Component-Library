import styled from "styled-components";

export const CategoriesContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const CategoryWrapper = styled.div`
    display: flex;
`

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    box-sizing: border-box;
    background-color: ${props => props.theme.colors.neutralColor00};
    border: solid 0.8px ${props => props.theme.colors.neutralColor60};
    border-radius: 3px;

    &:checked {
        background-color: ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.neutralColor00};
    }
`

export const CheckboxLabel = styled.label`
    color: ${props => props.theme.colors.neutralColor80};
    font-weight: 500;
    font-size: 14px;
`