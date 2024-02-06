import * as React from "react"
import { graphql } from "gatsby"

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

const TwoPage = ({ data }) => {
	//console.log(data)
	const tableauInit = data.nurseryMoth.nodes
	//console.log(tableauInit)
	let myArray = []
	for (let i = 0; i < tableauInit.length; i++) {
		console.log(tableauInit[i].data.fullDay)
		myArray.push(tableauInit[i].data.fullDay)
	}
	console.log("myArray: " + myArray)
	//const myArray = new Array(tableauInit.data)
	//console.log(myArray)
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
				<SectionContentCenter></SectionContentCenter>
			</Section>
		</main>
	)
}

export const query = graphql`
	query {
		nurseryMoth: allAirtable(
			filter: { table: { eq: "Nursery-Moth" } }
			sort: { order: ASC, fields: id }
		) {
			nodes {
				data {
					days_week
					fullDay
					morningWithMeal
					morningWithoutMeal
					afternoonWithMeal
					afternoonWithoutMeal
				}
			}
		}
	}
`

export default TwoPage

export const Head = () => <title>two Page</title>
