import styled from "styled-components";


interface ITagProps{
    color: string;
}

export const Container = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${props => props.theme.colors.tertiary};
    border-radius: 5px;
    margin: 10px 0;
    padding: 12px;

    cursor: pointer;
    transition: all 1s;

    position: relative;

    &:hover{
        opacity: .7;
        transform: translateX(10px);
    }

    > div {
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding-left: 10px;
    }

`;

export const Tag = styled.div<ITagProps>`
    background-color: ${props => props.color};
    width: 10px;
    height: 60px;
    position: absolute;
    margin-left: -12px;
    border-radius: 10px;
`;