import { css } from "styled-components"
import { setColor, setLetterSpacing } from "./utils"

export const fontFamilly = {
	titleFont: "Chelsea Market",
	bodyFont: "Comic Sans MS",
	defaultFonts: `"system",
  "-apple-system",
  ".SFNSText-Regular",
  "San Francisco",
  "Roboto",
  "Segoe UI",
  "Helvetica",
  "Arial",
  "sans-serif"`,
}
/* @link https://utopia.fyi/type/calculator?c=375,18,1.2,1240,22,1.333,5,2,&s=0.75|0.5|0.25|0.2,1.5|2|3|4|6,s-l&g=s,l,xl,12 */

export const typeScale = {
	/* Step -2: 12.5px → 12.3812px */
	fontSize2xs: `clamp(0.7738rem, 0.7845rem + -0.0137vi, 0.7813rem)`,
	line2xs: `clamp(0.938rem, 0.182vw + 0.895rem, 1.032rem)`,

	/* Step -1: 15px → 16.5041px */
	fontSizeXs: `clamp(0.9375rem, 0.8967rem + 0.1739vi, 1.0315rem)`,
	lineXs: `clamp(1.125rem, 0.485vw + 1.011rem, 1.375rem)`,

	/* Step 0: 18px → 22px */
	fontSizeS: `clamp(1.125rem, 1.0166rem + 0.4624vi, 1.375rem)`,
	lineS: `clamp(1.35rem, 0.936vw + 1.131rem, 1.833rem)`,

	/* Step 1: 21.6px → 29.326px */
	fontSizeM: `clamp(1.35rem, 1.1407rem + 0.8932vi, 1.8329rem)`,
	lineM: `clamp(1.62rem, 1.597vw + 1.246rem, 2.443rem)`,

	/* Step 2: 25.92px → 39.0916px */
	fontSizeL: `clamp(1.62rem, 1.2631rem + 1.5227vi, 2.4432rem)`,
	lineL: `clamp(1.944rem, 2.546vw + 1.347rem, 3.257rem)`,

	/* Step 3: 31.104px → 52.109px */
	fontSizeXl: `clamp(1.944rem, 1.3749rem + 2.4283vi, 3.2568rem)	`,
	lineXl: `clamp(2.333rem, 3.895vw + 1.42rem, 4.341rem)`,

	/* Step 4: 37.3248px → 69.4614px */
	fontSize2Xl: `clamp(2.3328rem, 1.462rem + 3.7152vi, 4.3413rem)`,
	line2Xl: `clamp(2.799rem, 5.794vw + 1.441rem, 5.787rem)`,

	/* Step 5: 44.7898px → 92.592px */
	fontSize3Xl: `clamp(2.7994rem, 1.5041rem + 5.5263vi, 5.787rem)`,
	line3Xl: `clamp(3.359rem, 8.446vw + 1.38rem, 7.714rem)`,
}

export const globalTypography = css`
	h1,
	.h1,
	h2,
	.h2,
	h3,
	.h3,
	h4,
	.h4,
	h5,
	.h5,
	h6,
	.h6 {
		color: ${setColor.purple};
		font-family: ${fontFamilly.titleFont};
		${setLetterSpacing()};
	}

	h1,
	.h1 {
		font-size: ${typeScale.fontSize3Xl};
		line-height: ${typeScale.line3Xl};
	}
	h2,
	.h2 {
		font-size: ${typeScale.fontSize2XL};
		line-height: ${typeScale.line2Xl};
	}
	h3,
	.h3 {
		font-size: ${typeScale.fontSizeXl};
		line-height: ${typeScale.lineXl};
	}
	h4,
	.h4 {
		font-size: ${typeScale.fontSizeL};
		line-height: ${typeScale.lineL};
	}
	h5,
	.h5 {
		font-size: ${typeScale.fontSizeM};
		line-height: ${typeScale.lineM};
	}
	h6,
	.h6 {
		font-size: ${typeScale.fontSizeS};
		line-height: ${typeScale.lineS};
	}

	p {
		font-size: ${typeScale.fontSizeS};
		line-height: ${typeScale.lineS};
	}

	small {
		font-size: ${typeScale.ftzXs};
		line-height: ${typeScale.lineXs};
	}

	*.notMargin {
		margin-bottom: 0 !important;
	}
`
