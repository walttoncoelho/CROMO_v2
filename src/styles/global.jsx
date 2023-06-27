import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

html, body, #root {
    height: 100%;
}

body {
    background-color: ${(props) => props.theme.color.background};
    color: ${(props) => props.theme.color.text};   
    font-family: ${(props) => props.theme.fonts.primary};
    html {
  scroll-behavior: smooth;
}

}
`;


