import styled from "styled-components";

export const Container = styled.div`
    grid-area: CT;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.primary};

    padding: 25px;

    /** LEMBRAR DE CONTROLAR O SCROLL DO TITULO E INPUT SELECT */
    height: 100vh calc(- 200px);
    overflow-y: scroll;
    /** LEMBRAR DE CONTROLAR O SCROLL DO TITULO E INPUT SELECT */

    ::-webkit-scrollbar{
        width: 10px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
        background-color: ${props => props.theme.colors.tertiary}
        border-radius: 10px;
    }
`;