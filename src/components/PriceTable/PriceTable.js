import React from "react"

const PriceTable = (props) => {
	const { priceData, propPrestation } = props

	return (
		<table>
			{priceData.map((item, i) => {
				const { daysWeek, Filtres, price } = item.data
				if (Filtres == propPrestation) {
					return (
						<tr>
							<td>{daysWeek}</td>
							<td>CHF {Number.isInteger(price) ? `${price}.-` : `${price}`}</td>
						</tr>
					)
				} else {
					return null
				}
			})}
		</table>
	)
}

export default PriceTable
