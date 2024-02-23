import React, { Fragment } from "react"
import styled from "styled-components"

// Import helpers
import { setFlex, setColor, spaceScale, media } from "../../styles/utils"

// Export Styles for the component
export const TitleWrapper = styled(Fragment)`
	${setFlex()};
	color: ${(props) => props.color || `${setColor.purple}`};

	${({ hidden }) =>
		hidden &&
		`
      display:none !important;
  `}
`
