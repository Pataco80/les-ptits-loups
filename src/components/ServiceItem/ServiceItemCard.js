import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

// Components
/*import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { MapAlt } from "@styled-icons/boxicons-regular/MapAlt"
// styles
//import styles from "../../css/tour.module.css"
import { GatsbyImage } from "gatsby-plugin-image"
*/

import * as S from "./ServiceItemCardStyled"

/* query
const getDefaultImage = graphql`
	query {
		file(relativePath: { eq: "defaultBcg.jpeg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`*/

const ServiceItem = ({ serviceDatas }) => {
	//const { images, slug, name, country, days, price } = serviceDatas
	//const data = useStaticQuery(getDefaultImage)
	//const img = data.file.childImageSharp.fluid

	//let featureImage = images ? images[0].fluid : img
	return (
		<S.Article className='{styles.tour}'>
			<S.ImgContainer className='{styles.imgContainer}'>
				GatsbyImage
				{/*<GatsbyImage
					image={featureImage}
					className={styles.img}
					alt='single tour image'
				/>*/}
			</S.ImgContainer>
			<S.CardFooter className='{styles.footer}'>
				<h3>name</h3>
				<Link className='{styles.link}' to={`/service/{slug}`}>
					Voir le Service
				</Link>
			</S.CardFooter>
		</S.Article>
	)
}

ServiceItem.propTypes = {
	serviceDatas: PropTypes.shape({
		name: PropTypes.string.isRequired,
		img: PropTypes.arrayOf(PropTypes.object),
	}),
}

export default ServiceItem
