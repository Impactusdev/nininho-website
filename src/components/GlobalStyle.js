import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;600;800&display=swap');

  * {padding: 0; margin: 0; box-sizing: border-box;}

  html{
    scroll-behavior: smooth;
  }
  body {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 16px;
    background: #707070;

    @media (max-width: 800px) {
      font-size: 14px;
    }
  }
`