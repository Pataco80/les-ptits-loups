const path = require(`path`)

const templatePath = path.resolve(`./src/templates/structure-template.js`)

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions

	const result = await graphql(`
		query getStructure {
			allAirtable(filter: { table: { eq: "Structure" } }) {
				totalCount
				edges {
					node {
						recordId
						data {
							structureName
							structureSlug
						}
					}
				}
			}
		}
	`)

	result.data.allAirtable.edges.forEach(({ node }) => {
		createPage({
			path: `/structure/${node.data.structureSlug}`,
			component: templatePath,
			context: {
				recordId: node.recordId,
			},
		})
	})
}

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
