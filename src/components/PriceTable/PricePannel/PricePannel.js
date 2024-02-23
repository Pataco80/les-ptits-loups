import React, { useContext } from "react"
import PriceTable from "../PriceTable"

const PricePannel = ({ priceData, record }) => {
	return (
		<>
			<div>
				<h3>{record}</h3>
			</div>
			<p>{priceData[0].data.Filtres[0]}</p>
		</>
	)
}

export default PricePannel
