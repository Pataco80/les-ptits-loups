import * as React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { Section } from "../components/StyledElements/SectionStyled"
import Title from "../components/Title/Title"
import ServiceList from "../components/ServicesList/ServiceList"

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

const IndexPage = () => {
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
				<Title tag='h2' title='Notre Structure' />
				<ServiceList />
				<AniLink fade to='/page2'>
					Go to Page 2
				</AniLink>
			</Section>
		</main>
	)
}

export default IndexPage

export const Head = () => <title>Home Page</title>
