import { createGlobalStyle } from "styled-components";
import { FontFace } from "./Fonts.styled";

const GlobalStyles = createGlobalStyle`
    ${FontFace}

    *, *::before, *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        background-color: #fbfbfb;
        position: relative;
    }

    p {
        line-height: 1.45;
    }  
    
    a {
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyles;
