import React, { useContext, useState } from "react"
import { PriceFilterContext } from "../../context/priceFilter"
import PricePannel from "../PriceTable/PricePannel/PricePannel"

const PriceList = ({ priceData, tablePrice }) => {
	const [price, setPrice] = useState(priceData)
	const { filters } = useContext(PriceFilterContext)
	console.log(filters)
	console.log(price)
	const puce = [2, 3, 4, 22, 33]
  const priceList = (arr) => {
    const myArray = []
		for (let i = 0; i < arr.length; i++) {
			console.log(arr)
			console.log(i)
			return i
		}
	}
	console.log(priceList(puce))

	return (
		<>
			{filters.map((item, i) => {
				return (
					<PricePannel
						record={item.data.name}
						priceData={priceData}></PricePannel>
				)
			})}
		</>
	)
}

export default PriceList
