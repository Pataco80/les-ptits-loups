import * as React from "react"

const pageStyles = {
	color: "#232129",
	padding: 96,
	fontFamily: "-apple-system, Roboto, sans-serif, serif",
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
		</main>
	)
}

export default IndexPage

export const Head = () => <title>Home Page</title>
