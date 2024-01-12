import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

// Import Components for App

// Import GlobalStyles and styles from styled-components files
import * as S from "./LayoutStyled"

// Component
const Layout = ({ children }) => {
	// Component Variables
	const [scrolled, setScrolled] = useState(false)
	// Hooks Effects
	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 5
			if (isScrolled !== scrolled) {
				setScrolled(!scrolled)
			}
		}
		document.addEventListener("scroll", handleScroll, { passive: true })
		return () => {
			document.removeEventListener("scroll", handleScroll)
		}
	}, [scrolled])

	// Render Component

	return (
		<S.AppWrapper>
			<S.PageContainer>{children}</S.PageContainer>
		</S.AppWrapper>
	)
}

// React PropTypes and more...
Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
