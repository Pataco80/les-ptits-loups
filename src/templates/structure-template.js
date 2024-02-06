import React from "react"
import { graphql } from "gatsby"

const structureTemplate = ({ data }) => {
	const { structureName, structureSlug } = data.airtable.data
	return (
		<div>
			<h2>{structureName}</h2>
			<p>{structureSlug}</p>
		</div>
	)
}

export default structureTemplate

export const query = graphql`
	query getRecord($recordId: String!) {
		airtable(recordId: { eq: $recordId }) {
			recordId
			data {
				structureName
				structureSlug
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
