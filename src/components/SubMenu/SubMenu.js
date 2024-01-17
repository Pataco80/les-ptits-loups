import React from "react"
import { KeyboardArrowLeft, KeyboardArrowDown } from "@styled-icons/material/"

import "./submenu.css"
import { Link } from "gatsby"
const SubMenu = ({ className, menu }) => {
	return (
		<ul className={`${className}`}>
			{menu.subMenu.map((sub, i) => (
				<li key={i} className='menu_list'>
					<div className='nav_menu'>
						{sub.subMenu && (
							<span className='icon_left'>
								<KeyboardArrowLeft size={24} />
							</span>
						)}
						<Link to={sub.path}>{sub.label}</Link>
						{sub.subMenu && (
							<span className='icon_down'>
								<KeyboardArrowDown size={24} />
							</span>
						)}
					</div>
					{sub.subMenu && (
						<>
							<ul className='sub_menu'>
								{sub.subMenu.map((menu, i) => {
									return (
										<li key={i}>
											<Link to={menu.path}>{menu.label}</Link>
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
