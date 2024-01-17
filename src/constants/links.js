export const linksMenu = [
	{
		label: "Accueil",
		path: "/",
	},
	{
		label: "A Propos",
		path: "/about/",
	},
	{
		label: "Services",
		subMenu: [
			{
				label: "Plâtre",
				path: "/services/platre/",
			},
			{
				label: "Peinture",
				path: "/services/peinture/",
			},
			{
				label: "Papier-Peint",
				path: "/services/papier-peint/",
			},
			{
				label: "Décoration",
				path: "/services/decoration/",
				subMenu: [
					{
						label: "subitem1",
						path: "/subitem1",
					},
					{
						label: "subitem2",
						path: "subitem2",
					},
				],
			},
			{
				label: "Giclage",
				path: "/services/giclage/",
			},
		],
	},
	{
		label: "Nos Travaux",
		path: "/works/",
	},
	{
		label: "Contact",
		path: "/contact/",
	},
]
