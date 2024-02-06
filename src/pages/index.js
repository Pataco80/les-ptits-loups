import * as React from "react"
import { Section } from "../components/StyledElements/SectionStyled"
import Title from "../components/Title/Title"
import ServiceList from "../components/ServicesList/ServiceList"

const IndexPage = () => {
	return (
		<main>
			<h1>
				Congratulations
				<br />
				<span>— you just made a Gatsby site! 🎉🎉🎉</span>
			</h1>
			<p>
				Edit <code>src/pages/index.js</code> to see this page update in
				real-time. 😎
			</p>
			<Section>
				<Title tag='h2' title='Notre Structure' />
				<ServiceList />
			</Section>
		</main>
	)
}

export default IndexPage

export const Head = () => <title>Home Page</title>
