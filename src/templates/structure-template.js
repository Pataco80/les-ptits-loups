import React, { useState, useCallback, useRef, useEffect } from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Lightbox from "yet-another-react-lightbox"
import Captions from "yet-another-react-lightbox/plugins/captions"
import Share from "yet-another-react-lightbox/plugins/share"
import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/captions.css"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/thumbnails.css"

import LightGallery from "lightgallery/react"

// import styles
import "lightgallery/css/lightgallery.css"
import "lightgallery/css/lg-zoom.css"
import "lightgallery/css/lg-thumbnail.css"
import "lightgallery/css/lg-share.css"

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail"
import lgZoom from "lightgallery/plugins/zoom"
import lgShare from "lightgallery/plugins/share"
import lgHash from "lightgallery/plugins/hash"

const onInit = () => {
	console.log("lightGallery has been initialized")
}

const StructureTemplate = ({ data }) => {
	const lightGallery = useRef(null)

	const { structureName, structureSlug } = data.structure.data
	const imageNodes = data.structure.data.Gallery
	console.log("imageNodes: " + imageNodes)
	const slides = imageNodes.map((node) => {
		console.log(
			node.data.galleryImage.localFiles[0].childImageSharp.original.src
		)
		return {
			src: node.data.galleryImage.localFiles[0].childImageSharp.original.src,
			title: node.data.galleryImageLegend,
		}
	})

	const [index, setIndex] = useState(-1)

	const onInit = useCallback((detail) => {
		if (detail) {
			lightGallery.current = detail.instance
		}
	}, [])

	const getItems = useCallback(() => {
		return imageNodes.map((image) => {
			return (
				<div
					key={image}
					className='gallery-item'
					data-src={
						image.data.galleryImage.localFiles[0].childImageSharp.original.src
					}>
					<GatsbyImage
						alt={image.data.galleryImageLegend}
						image={getImage(image.data.galleryImage.localFiles[0])}
					/>
				</div>
			)
		})
	}, [imageNodes])

	useEffect(() => {
		lightGallery.current.refresh()
	}, [imageNodes])

	return (
		<>
			<Layout>
				<Lightbox
					open={index >= 0}
					index={index}
					close={() => setIndex(-1)}
					slides={slides}
					plugins={[Captions, Thumbnails, Share]}
				/>
				<div>
					<h2>{structureName}</h2>
					<p>{structureSlug}</p>
					<div className='tile is-vertical'>
						{imageNodes.map((image, index) => {
							console.log("image: " + image)
							return (
								<div
									className='tile is-parent'
									onClick={(event) => setIndex(index)}
									onKeyDown={(event) => setIndex(index)}>
									<GatsbyImage
										alt={image.data.galleryImageLegend}
										image={getImage(image.data.galleryImage.localFiles[0])}
									/>
									<p>{image.data.galleryImageLegend}</p>
								</div>
							)
						})}
					</div>
					<hr />
					<div>
						<h4>LightGallery</h4>
						<LightGallery
							plugins={[lgShare, lgThumbnail, lgHash, lgZoom]}
							elementClassNames='custom-class-name'
							onInit={onInit}>
							{getItems()}
						</LightGallery>
					</div>
					<hr />
					<pre>{JSON.stringify(data, null, 2)}</pre>
				</div>
			</Layout>
		</>
	)
}

export default StructureTemplate

export const query = graphql`
	query ($recordId: String!) {
		structure: airtable(recordId: { eq: $recordId }) {
			recordId
			data {
				structureName
				structureSlug
				Gallery {
					id
					data {
						imageId
						galleryImageLegend
						galleryImage {
							localFiles {
								childImageSharp {
									gatsbyImageData(
										layout: FULL_WIDTH
										placeholder: TRACED_SVG
										formats: WEBP
										quality: 50
									)
									original {
										src
										width
										height
									}
								}
							}
						}
					}
				}
			}
		}
	}
`

{
	/**
fragment AirtableImgParams on AirtableField {
		localFiles {
			childImageSharp {
				gatsbyImageData(layout: FULL_WIDTH)
			}
			name
		}
	} */
}
