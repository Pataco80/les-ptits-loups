import * as React from "react"
import { graphql } from "gatsby"

import {
	Section,
	SectionContentCenter,
} from "../components/StyledElements/SectionStyled"
import { N, P } from "styled-icons/fa-solid"
import PriceTable from "../components/PriceTable/PriceTable"
import PricePannel from "../components/PriceTable/PricePannel/PricePannel"
import PriceList from "../components/PriceList/PriceList"
import { PriceProvider } from "../context/priceFilter"
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
	const prestationFilter = data.filtres.nodes
	const prixNurseryMoth = data.nurseryMoth.nodes

	const prestations = [
		...new Set(
			prestationFilter.map((prest) => {
				return prest
			})
		),
	]

	console.log("prestations page: " + prestations)
	//console.log("priceData: " + priceData)
	//console.log("prixNurseryMoth[0].data: " + prixNurseryMoth[0].data.prestation)

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
			{/*<pre>{JSON.stringify(data, null, 4)}</pre>*/}
			<Section>
				<PriceProvider>
					<h3>La Nurserie</h3>
					<SectionContentCenter>
						<div className='col1'>
							<PriceList
								priceData={prixNurseryMoth}
								tablePrice={`Journée Complète`}
							/>
						</div>
						<br />
						<hr />
						<div className='col2'>
							<h4>Prix au jour</h4>
							<table className='table'>
								{prixNurseryMoth.map((item, i) => {
									const { iD, prestation2, prestation, daysWeek, price } =
										item.data
									return (
										<tr>
											<td>{iD}</td>
											<td>{daysWeek}</td>
											<td>{price}</td>
											<td>{prestation}</td>
											<td>{prestation2}</td>
										</tr>
									)
								})}
							</table>
						</div>
					</SectionContentCenter>
				</PriceProvider>
			</Section>
		</main>
	)
}

export const query = graphql`
	query {
		filtres: allAirtable(
			filter: { table: { eq: "Filtres" } }
			sort: { fields: data___iD, order: ASC }
		) {
			nodes {
				recordId
				data {
					name
					NurseryMoth
				}
			}
		}
		nurseryMoth: allAirtable(
			filter: { table: { eq: "Nursery-Moth" } }
			sort: { fields: data___iD, order: ASC }
		) {
			totalCount
			nodes {
				data {
					iD
					Filtres
					prestation
					daysWeek
					price
				}
			}
		}
	}
`

export default TwoPage

export const Head = () => <title>two Page</title>
