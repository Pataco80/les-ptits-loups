import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"
import { globalTypography, typeScale, fontFamilly } from "./typography"
import { setColor, setLetterSpacing, spaceScale } from "./utils"

const GlobalStyle = createGlobalStyle`
${reset};
  ${globalTypography}
  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: ${fontFamilly.defaultFonts};
    font-size: 1rem;
    color: ${setColor.mainBlack};
    width: 100%;
    overflow-x: hidden;
  }

  body {
    font-family: ${fontFamilly.bodyFont};
		font-size: ${typeScale.fontSizeS};
		line-height: ${typeScale.lineS};
    ${setLetterSpacing(1.3)}
  }

	.text-center {
		text-align:center;
	}
`

export default GlobalStyle
