import React from "react"
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"
import Title from "../Title/Title"
import * as S from "./HeroStyled"
const Hero = (props) => {
	const { home, bcgHero, children } = props
	return (
		<>
			{home ? (
				<S.HeroWrapper home={home}>{children}</S.HeroWrapper>
			) : (
				<S.HeroWrapper>
					<Title tag='h1' title='title' />
					<GatsbyImage image={getImage(bcgHero)} alt='alt' />
				</S.HeroWrapper>
			)}
		</>
	)
}

export default Hero
