import * as React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import {
	Section,
	SectionContentCenter,
} from "../components/StyledElements/SectionStyled"

const pageStyles = {
	color: "#232129",
	padding: 96,
}
const headingStyles = {
	marginTop: 0,
	marginBottom: 64,
	maxWidth: 320,
}
const headingAccentStyles = {
	color: "#663399",
}
const paragraphStyles = {
	marginBottom: 48,
}
const codeStyles = {
	color: "#8A6534",
	padding: 4,
	backgroundColor: "#FFF4DB",
	fontSize: "1.25rem",
	borderRadius: 4,
}

const TwoPage = () => {
	return (
		<main style={pageStyles}>
			<h1 style={headingStyles}>
				Congratulations
				<br />
				<span style={headingAccentStyles}>
					— you just made a Gatsby site! 🎉🎉🎉
				</span>
			</h1>
			<p style={paragraphStyles}>
				Edit <code style={codeStyles}>src/pages/index.js</code> to see this page
				update in real-time. 😎
			</p>
			<Section>
				<SectionContentCenter>
					<AniLink fade to='/'>
						index
					</AniLink>
				</SectionContentCenter>
			</Section>
		</main>
	)
}

export default TwoPage

export const Head = () => <title>two Page</title>
