import React from "react"
import PropTypes from "prop-types"

// Import styles from styled-components file and helpers
import * as S from "./TitleStyled"

// Component
const Title = (props) => {
	const { title, tag: Tag, hidden, centerText, children, className } = props
	// Render Component
	return (
		<S.TitleWrapper>
			<Tag className={className} hidden={hidden} centerText={centerText}>
				{title?.title || children}
			</Tag>
		</S.TitleWrapper>
	)
}

// React PropTypes and more...
Title.defaultProps = {
	tag: "h1",
	title: "Mon titre",
}

Title.propTypes = {
	tag: PropTypes.string.isRequired,
	title: PropTypes.string,
}

export default Title
