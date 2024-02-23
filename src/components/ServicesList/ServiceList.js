import React from "react"
import ServiceItemCard from "../ServiceItem/ServiceItemCard"
import * as S from "./ServiceListStyled"

const ServiceList = ({ serviceData }) => {
	//console.log(serviceData)
	return (
		<S.ServiceListContainer>
			<ServiceItemCard />
		</S.ServiceListContainer>
	)
}

export default ServiceList
