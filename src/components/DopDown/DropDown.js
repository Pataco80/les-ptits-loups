import React, { useState } from "react"
import "./dropdown.css"
import { linksMenu } from "../../constants/links"
import { Link } from "gatsby"
import { KeyboardArrowDown, Menu, Close } from "@styled-icons/material/"
import SubMenu from "../SubMenu/SubMenu"
const DropDown = () => {
	const [openMenu, setOpenMenu] = useState(false)
	return (
		<nav className='header'>
			<div className='wrapper'>
				<div className='logo'>
					<Link to='/'>Logo</Link>
				</div>
				<span
					className={`shadow ${openMenu && "active"}`}
					onClick={() => setOpenMenu(false)}
				/>
				<ul className={`navigation ${openMenu && "active"}`}>
					<span className='close_menu' onClick={() => setOpenMenu(false)}>
						<Close size={24} />
					</span>
					{linksMenu.map((menu, i) => (
						<li key={i} className='menu_list'>
							<Link to={menu.path} onClick={() => setOpenMenu(false)}>
								{menu.label}
								{menu.subMenu && (
									<span>
										<KeyboardArrowDown size={24} />
									</span>
								)}
							</Link>

							{menu.subMenu && (
								<SubMenu menu={menu} className='menu' openMenu={setOpenMenu} />
							)}
						</li>
					))}
				</ul>
				<span className='menu_bar' onClick={() => setOpenMenu(true)}>
					<Menu size={36} />
				</span>
			</div>
		</nav>
	)
}

export default DropDown
