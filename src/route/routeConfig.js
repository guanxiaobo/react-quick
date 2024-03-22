const routerMenus = [];

/**
 * 路由配置扁平化
 * @returns
 */
export const getFlatRouterMenus = () => {
	const config = [];
	routerMenus.forEach((item) => {
		return config.push(flat(item));
	});

	function flat(menu) {
		if (menu.children) {
			return menu.children.map((item) => {
				return flat(item);
			});
		} else {
			return menu;
		}
	}
	return config.flat(Infinity);
};

export default routerMenus;
