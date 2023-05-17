import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        transition: all 0.3s ease-in-out;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
      background-color: hsl(233, 47%, 7%);
    }
`;