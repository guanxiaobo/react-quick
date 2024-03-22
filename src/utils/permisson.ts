import { flattenArray } from '@/utils/util';
import { getFlatRouterMenus } from '@/route/routeConfig';
import NotFound from '@/components/404';

interface IRouter {
	name: string;
	path: string;
	component: React.LazyExoticComponent<React.FC<any>>;
}

/**
 * 路由主数转map
 * @returns object
 */
const routerArrayToObject = () => {
	const routerList = getFlatRouterMenus();
	const obj: CommonObjectType = {};
	routerList.forEach((router: IRouter) => {
		obj[router.name] = router;
	});
	return obj;
};

/**
 * 组装路由，返回对应权限
 * @param pageRouter 页面
 * @returns []
 */
export const packageAuthRouter = (pageRouter: CommonObjectType[]) => {
	const devRouterList = getFlatRouterMenus();
	const routerMap = routerArrayToObject();
	const routerList: CommonObjectType[] = [];
	pageRouter.forEach((item: CommonObjectType) => {
		routerMap[item.menuCode] && routerList.push(routerMap[item.menuCode]);
	});
	console.log('menus-------', pageRouter, routerList);
	routerList.push({
		path: '*',
		component: NotFound
	});
	// 本地联调权限可以更改此处条件
	return process.env.REAL_ENV === 'development' ? devRouterList : routerList;
};

/**
 * 返回按钮list
 * @param pageRouter 页面
 * @returns
 */
export const packageAuthButton = (pageRouter: CommonObjectType[]) => {
	const authButtonMap: CommonObjectType = {};
	pageRouter.forEach((page: CommonObjectType) => {
		if (page.menuFunctionList) {
			page.menuFunctionList.forEach((item: CommonObjectType) => {
				authButtonMap[`${item.menuCode}.${item.functionCode}`] = item;
			});
		}
	});
	console.log('authButtonMap', authButtonMap);
	return authButtonMap;
};

/**
 * 路由、按钮权限
 * @param menuList 菜单list
 * @returns
 */
export const packageAuth = (menuList: CommonObjectType[]) => {
	const menus = flattenArray(menuList, 'childMenuTreeList');
	const pageRouter = menus.filter((item: CommonObjectType) => item.containPageFlag);
	const authRouterList = packageAuthRouter(pageRouter);
	const authButtonMap = packageAuthButton(pageRouter);
	return {
		authRouterList,
		authButtonMap
	};
};
