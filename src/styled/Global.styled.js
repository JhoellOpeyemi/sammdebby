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
        background-color: ${({ theme }) => theme.color.bgColor};
        position: relative;

        &.no-scroll {
            overflow: hidden;
        }
    }

    p {
        line-height: 1.45;
    }  
    
    a {
        text-decoration: none;
        color: inherit;
    }

    span {
        display: inline-block;
    }
`;

export default GlobalStyles;
