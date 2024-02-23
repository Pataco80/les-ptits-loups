import * as React from "react"
import {
	Section,
	SectionContentCenter,
} from "../components/StyledElements/SectionStyled"
import Title from "../components/Title/Title"
import ServiceList from "../components/ServicesList/ServiceList"
import { StaticImage } from "gatsby-plugin-image"
import Hero from "../components/Hero/Hero"
import { GatsbyButtonLink } from "../components/StyledElements/ButtonsStyled"
const IndexPage = () => {
	return (
		<>
			<Hero home>
				<h1 className='text-center'>
					Garderie <br />
					Les P'tits Loups
				</h1>
				<StaticImage
					src='../images/defaultBcg.jpeg'
					alt='alt'
					className='hero-image'
					loading='eager'
					placeholder='blurred'
					layout='fullWidth'
					objectFit='cover'
				/>
				<SectionContentCenter className='call-actions'>
					<GatsbyButtonLink primary to='/'>
						Notre Structure
					</GatsbyButtonLink>
					<GatsbyButtonLink secondary to='/'>
						Nous contacter
					</GatsbyButtonLink>
				</SectionContentCenter>
			</Hero>
			<p>
				Edit <code>src/pages/index.js</code> to see this page update in
				real-time. 😎
			</p>
			<Section>
				<Title tag='h2' title='Notre Structure' />
				<ServiceList />
			</Section>
		</>
	)
}

export default IndexPage

export const Head = () => <title>Home Page</title>
