import React from "react"
import { KeyboardArrowLeft, KeyboardArrowDown } from "@styled-icons/material/"

import "./submenu.css"
import { Link } from "gatsby"
const SubMenu = ({ className, menu, openMenu }) => {
	console.log("openMenu: " + openMenu)
	return (
		<ul className={`${className}`}>
			{menu.subMenu.map((sub, i) => (
				<li key={i} className='menu_list'>
					<Link to={sub.path} onClick={() => openMenu(false)}>
						{sub.subMenu && (
							<span className='icon_left'>
								<KeyboardArrowLeft size={24} />
							</span>
						)}
						{sub.label}
						{sub.subMenu && (
							<span className='icon_down'>
								<KeyboardArrowDown size={24} />
							</span>
						)}
					</Link>

					{sub.subMenu && (
						<>
							<ul className='sub_menu'>
								{sub.subMenu.map((menu, i) => {
									return (
										<li key={i}>
											<Link to={menu.path} onClick={() => openMenu(false)}>
												{menu.label}
											</Link>
										</li>
									)
								})}
							</ul>
						</>
					)}
				</li>
			))}
		</ul>
	)
}

export default SubMenu
