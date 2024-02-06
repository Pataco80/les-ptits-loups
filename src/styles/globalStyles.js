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
  }

  body {
    font-family: ${fontFamilly.bodyFont};
		font-size: ${typeScale.fontSizeS};
		line-height: ${typeScale.lineS};
    ${setLetterSpacing(1.3)}
  }

  h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6 {
    font-family: ${fontFamilly.titleFont};
    color: ${setColor.mainBlack};
    font-weight: 900;
    ${setLetterSpacing()};
  }

	h1,
	.h1 {
		font-size: ${typeScale.fontSize3Xl};
		line-height: ${typeScale.line3Xl};
    margin-bottom: ${spaceScale.spaceLupXl};
	}
	h2,
	.h2 {
		font-size: ${typeScale.fontSize2Xl};
		line-height: ${typeScale.line2Xl};
    margin-bottom: ${spaceScale.spaceMupL};
	}
	h3,
	.h3 {
		font-size: ${typeScale.fontSizeXl};
		line-height: ${typeScale.lineXl};
    margin-bottom: ${spaceScale.spaceSupM};
	}
	h4,
	.h4 {
		font-size: ${typeScale.fontSizeL};
		line-height: ${typeScale.lineL};
    margin-bottom: ${spaceScale.spaceSupM};
	}
	h5,
	.h5 {
		font-size: ${typeScale.fontSizeM};
		line-height: ${typeScale.lineM};
    margin-bottom: ${spaceScale.spaceSupM};
	}
	h6,
	.h6 {
		font-size: ${typeScale.fontSizeS};
		line-height: ${typeScale.lineS};
    margin-bottom: ${spaceScale.spaceXsUpS};
	}

	p {
		font-size: ${typeScale.fontSizeS};
		line-height: ${typeScale.lineS};
    margin-bottom: ${spaceScale.spaceXsUpS};
	}

	small,.small {
		font-size: ${typeScale.ftzXs};
		line-height: ${typeScale.lineXs};
    margin-bottom: ${spaceScale.spaceXsUpS};
	}
`

export default GlobalStyle
