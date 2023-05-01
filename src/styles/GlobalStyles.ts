import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }
    html, body, #root{
        height: 100vh;
    }
    *, button, input{
        border: 0; outline: 0;
        font-family: 'Roboto', sans-serif;
    }
    button { cursor: pointer }
    
`;