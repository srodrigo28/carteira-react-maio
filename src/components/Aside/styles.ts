import styled from "styled-components";

export const Container = styled.div`
    grid-area: AS;
    color: ${ props => props.theme.colors.white };
    background-color: ${ props => props.theme.colors.secondary };
    padding-left: 20px;

    border-right: 1px solid ${ props => props.theme.colors.gray };
`

export const Header = styled.header`
    height: 70px;
    display: flex;
    align-items: center;
    gap: 10px;
`;
export const LogImg = styled.img`
    height: 30px;
    width: 30px;
`;
export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;
`;
export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
`;
export const MenuItemLink = styled.a`
    color: ${props => props.theme.colors.info};
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: start;
    gap: 5px;

    transition: opacity .3s;
    
    &:hover {
        opacity: .7;
    }   
`;