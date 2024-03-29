import React, { useState } from "react"
import "./dropdown.css"
import { linksMenu } from "../../constants/links"
import { Link } from "gatsby"
import { KeyboardArrowDown, Menu, Close } from "@styled-icons/material/"
import SubMenu from "../SubMenu/SubMenu"
const DropDown = () => {
	const [openMenu, setOpenMenu] = useState(false)
	const [openSubMenu, setOpenSubMenu] = useState(false)
	console.log("openMenu: " + openMenu)
	console.log("openSubMenu: " + openSubMenu)

	const MenuItem = ({ menu, index }) => {
		return (
			<>
				{menu.subMenu ? (
					<li
						key={index}
						className='menu_list'
						onMouseEnter={() => setOpenSubMenu(true)}
						onMouseLeave={() => setOpenSubMenu(false)}
						onClick={() => setOpenSubMenu(!openSubMenu)}>
						<Link to={menu.path}>
							{menu.label}
							{menu.subMenu && (
								<span>
									<KeyboardArrowDown size={24} />
								</span>
							)}
						</Link>
						<SubMenu
							menu={menu}
							className={openSubMenu ? `openSubMenu menu` : `menu`}
							openMenu={openSubMenu}
							onMouseOver={() => setOpenSubMenu(true)}
							onMouseLeave={() => setOpenSubMenu(false)}
						/>
					</li>
				) : (
					<li key={index} className='menu_list'>
						<Link to={menu.path} onClick={() => setOpenMenu(false)}>
							{menu.label}
						</Link>
					</li>
				)}
			</>
		)
	}

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
					{linksMenu.map((menu, i) => {
						return <MenuItem menu={menu} index={i} />
					})}
				</ul>
				<span className='menu_bar' onClick={() => setOpenMenu(true)}>
					<Menu size={36} />
				</span>
			</div>
		</nav>
	)
}

export default DropDown
