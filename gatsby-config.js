/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`, // or '.env'
})
module.exports = {
	siteMetadata: {
		title: `les-ptits-loups`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		"gatsby-plugin-styled-components",
		"gatsby-plugin-image",
		"gatsby-plugin-sitemap",

		{
			resolve: `gatsby-source-airtable`,
			options: {
				apiKey: process.env.AIRTABLE_API_USER_KEY_TOKEN, // may instead specify via env, see below
				concurrency: 5, // default, see using markdown and attachments for more information
				tables: [
					// Données de Site Database
					{
						baseId: process.env.AIRTABLE_SITE_DATABASE_ID,
						tableName: `Gallery`,
						mapping: {
							galleryImage: `fileNode`,
						}, // optional, e.g. "text/markdown", "fileNode"
						tableLinks: [`Structure`],
					},
					{
						baseId: process.env.AIRTABLE_SITE_DATABASE_ID,
						tableName: `Structure`,
						mapping: {
							description: `text/markdown`,
							structureFeatureImg: `fileNode`,
						}, // optional, e.g. "text/markdown", "fileNode"
						tableLinks: [`Gallery`],
					},
					{
						baseId: process.env.AIRTABLE_PRIX_DATABASE_ID,
						tableName: `Nursery-Moth`,
					},
				],
			},
		},

		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/images/icon.png",
			},
		},
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
	],
}
