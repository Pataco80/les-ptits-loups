import styled from "styled-components"

// Export Styles for the component
export const AppWrapper = styled.div`
	width: 100vw;
	min-height: 100vh;
`

export const PageContainer = styled.div`
	z-index: 2;

	&.isScroll {
		margin-top: 5rem;
	}
`
