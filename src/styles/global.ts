import { createGlobalStyle } from "styled-components";
import { variables } from "./color-variables";

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #f0f2f5;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

html {
    font-size: 16px;

    @media (max-width: 1080px) {
        font-size: 93.75%;
    }

      @media (max-width: 720px) {
        font-size: 87.5%;
    }
}

body {
    background: ${variables.background};
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6 , strong {
    font-weight: 600;
}

button {
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

`;
