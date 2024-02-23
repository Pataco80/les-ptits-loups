import styled, { css } from "styled-components"

// Import Components for App
import { Link } from "gatsby"

// Import helpers
import {
	setLetterSpacing,
	setColor,
	setBorder,
	setTransition,
	setPxToRem,
	setRadius,
} from "../../styles/utils"

// Styled CSS
const ButtonStyles = css`
	text-transform: uppercase;
	text-decoration: none;
	${setLetterSpacing()};
	padding: ${setPxToRem(14)} ${setPxToRem(26)};
	display: inline-block;
	${setTransition()};
	${setRadius({ allPx: 12 })};
	cursor: pointer;
	background: none;
	font-weight: 900;

	&.btnIconBar {
		padding: ${setPxToRem(8)} ${setPxToRem(4)};
		border: none;
		height: auto;
		color: ${setColor.mainWhite};
		border-radius: inherit;

		&:focus,
		&:active,
		&:focus {
			outline: none;
		}
	}

	${({ small }) =>
		small &&
		`
      padding: ${setPxToRem(8)} ${setPxToRem(12)};
  `}

	${({ noPadding }) =>
		noPadding &&
		`
      padding: ${setPxToRem(0)} ${setPxToRem(0)};
  `}

  ${({ notRadius }) =>
		notRadius &&
		`
      border-radius:0;
  `}
  


  ${({ primary }) =>
		primary &&
		`
    color: ${setColor.orange};
    border: ${setBorder({ color: `${setColor.purple}` })};
    background: ${setColor.purple};
  `}

  ${({ secondary }) =>
		secondary &&
		`
    color: ${setColor.purple};
    border: ${setBorder({ color: setColor.orange })};
    background: ${setColor.orange};
  `}

  ${({ primaryOutline }) =>
		primaryOutline &&
		`
    color: ${setColor.primaryColor};
    border: ${setBorder({ color: `${setColor.primaryColor}` })};
  `}

  ${({ outline }) =>
		outline &&
		`
    color: ${setColor.primaryColor};
    border: ${setBorder({ size: 2, color: setColor.mainWhite })};
  `}

  &:hover {
		${({ primary, secondary, primaryOutline }) =>
			(primary || secondary || primaryOutline) &&
			`
      color: ${setColor.orange};
      border: ${setBorder({ color: `${setColor.purpleD20}` })};
      background: ${setColor.purpleD20};
    `}

		${({ outline }) =>
			outline &&
			`
      background: ${setColor.mainWhite};
      color: ${setColor.primaryColorD1};
    `}
	}
`

// Export Styles for the component
export const Button = styled.button`
	${ButtonStyles};
`

export const ButtonLink = styled.a`
	${ButtonStyles};
`

export const ButtonForm = styled.input`
	${ButtonStyles};
`

export const GatsbyButtonLink = styled(Link)`
	${ButtonStyles};
`
