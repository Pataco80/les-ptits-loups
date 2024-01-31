import styled, { css } from "styled-components"

// Import helpers
import { layout, media, setColor, spaceScale } from "../../styles/utils"

// Styled CSS
const SectionCss = css`
	background-color: ${(props) =>
		props.background ? props.background : `${setColor.mainWhite}`};
	padding: ${(props) =>
		props.padding
			? props.padding
			: `${spaceScale.spaceL} ${spaceScale.spaceSupXl}`};
`

// Export Styles for the component
export const Section = styled.section`
	${SectionCss}
	width: 100vw;
`
export const SectionContent = styled.div`
	padding: ${(props) => (props.padding ? props.padding : `0`)};
	width: 100%;
`

export const SectionCenter = styled.section`
	${SectionCss}
	${layout()};
	width: 100%;
`

export const SectionContentCenter = styled.div`
	${layout()};
	padding: ${(props) => (props.padding ? props.padding : `0`)};
	width: 100%;
`

export const MainContent = styled.main`
	background-color: ${(props) =>
		props.background ? props.background : `${setColor.mainWhite}`};
`
