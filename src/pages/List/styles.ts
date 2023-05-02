import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div``;

export const Filters = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    .tag-filters{
        font-size: 18px;
        font-weight: 500;
        background-color: transparent;
        color: ${ props => props.theme.colors.white };

        transition: opacity .1s;

        :hover{
            opacity: .5;
        }

        ::after{ 
            content: '';
            display: block;
            width: 55px;
            margin-left: 1px;
            border-bottom: 10px solid ${ props => props.theme.colors.warning };
        }
    }
    .tag-filter-recurrent::after{
        content: '';
            display: block;
            width: 55px;
            margin-left: 1px;
            border-bottom: 10px solid ${ props => props.theme.colors.warning };
    }
    .tag-filter-eventual::after{
        content: '';
            display: block;
            width: 55px;
            margin-left: 1px;
            border-bottom: 10px solid ${ props => props.theme.colors.success };
    }
`;