import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    *{
        box-sizing:boerder-box;
        margin: 0;
        padding: 0;
     }
    body: {
        height: 100vh;
    }
    /* @font-face {
        font-family: 'Gotham';
        src: url("http://fonts.cdnfonts.com/css/gotham");
        unicode-range: U+0041-005A, U+0061-007A;
        font-style: normal;
    } */
    /* * {
        font-style: normal;
        letter-spacing: -0.02em;
        user-select: none;
        -webkit-touch-callout: none;
        -webkit-tap-highlight-color:rgba(255,255,255,0);
    } */
`  
export default GlobalStyles;