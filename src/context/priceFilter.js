import React, { createContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
const PriceFilterContext = createContext()

const PriceProvider = ({ children }) => {
	const data = useStaticQuery(getFilter)
	const filters = data.allAirtable.nodes
	console.log("filters: " + data.allAirtable.nodes)

	return (
		<PriceFilterContext.Provider value={{ filters }}>
			{children}
		</PriceFilterContext.Provider>
	)
}

export { PriceProvider, PriceFilterContext }

export const getFilter = graphql`
	query {
		allAirtable(
			filter: { table: { eq: "Filtres" } }
			sort: { fields: data___iD, order: ASC }
		) {
			nodes {
				recordId
				data {
					name
					NurseryMoth
					NurseryDay
				}
			}
		}
	}
`
