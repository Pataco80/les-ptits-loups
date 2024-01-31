import React from "react"
import styled from "styled-components"

// Import helpers
import { setFlex, spaceScale, media } from "../../styles/utils"

// Export Styles for the component
export const TitleWrapper = styled.div`
	${setFlex()};
	text-align: center;

	${({ hidden }) =>
		hidden &&
		`
      display:none !important;
  `}
`
