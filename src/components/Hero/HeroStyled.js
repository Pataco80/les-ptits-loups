import styled from "styled-components"
import { setFlex, setColor, spaceScale } from "../../styles/utils"

export const HeroWrapper = styled.header`
	${setFlex({ flDir: "column", wrap: "nowrap", x: "space-around" })};
	height: ${(props) =>
		props.home || props.error ? "calc(100vh - 56px)" : "38rem"};
	position: relative;
	width: 100vw;
	overflow: hidden;
	padding-bottom: ${(props) => (props.error ? "10rem" : 0)};
	background: ${(props) =>
		props.home ? `linear-gradient(${setColor.purple}4a, #ffffff3a)` : `none`};
	background-position: center;
	background-size: cover;
	opacity: 1 !important;
	h1 {
		font-weight: 900;
		line-height: calc(${spaceScale.space3xl}*1.5);
	}

	.hero-image {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -10;
	}

	.call-actions {
		${setFlex()};
		flex-direction: row;
		flex: none;
		justify-content: space-around;
	}
`
