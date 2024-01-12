import React from "react"
import "./dropdown.css"
import { linksMenu } from "../../constants/links"
import { Link } from "gatsby"
import { KeyboardArrowDown } from "@styled-icons/material/KeyboardArrowDown"
const DropDown = () => {
	return (
		<header className='header'>
			<div className='wrapper'>
				<div className='logo'>
					<h1 className='h4'>Logo</h1>
				</div>
				<ul className='navigation'>
					{linksMenu.map((menu, i) => (
						<li key={i} className='list_menu'>
							<div className='nav_menu'>
								<Link to={menu.path}>{menu.label}</Link>
								{menu.submenu && (
									<span>
										<KeyboardArrowDown size={16} />
									</span>
								)}
							</div>
						</li>
					))}
				</ul>
			</div>
		</header>
	)
}

export default DropDown
