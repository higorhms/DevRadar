import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

*:focus{
    outline: 0;
}

html, body, #root {
    height: 100%;
    background: #eee;
}
body{
    -webkit-font-smoothing: antialiased;
}
body, input, button {
    font-family: 'Roboto' Arial, Helvetica, sans-serif;
    font-size: 14px;
}

a{
    text-decoration: none;
}

ul{
    list-style: none;
}

button{
    cursor: pointer;
}

`;
