import { createGlobalStyle } from "styled-components"
import Lora from "../fonts/Lora.ttf"
import LoraItalic from "../fonts/Lora-Italic.ttf"
import PoppinsThin from "../fonts/Poppins-Thin.ttf"

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: Lora;
        src: url(${ Lora });
    }

    @font-face {
        font-family: LoraItalic;
        src: url(${ LoraItalic });
    }

    @font-face {
        font-family: PoppinsThin;
        src: url(${ PoppinsThin });
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #fff;
        overflow: auto;

        &.no-scroll {
            overflow: hidden;
        }
    }

    a {
        text-decoration: none;
    }
`

export default GlobalStyle