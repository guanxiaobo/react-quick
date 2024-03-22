/**
 * 以递归的方式展平react router数组
 * @param {object[]} arr 路由数组
 */
export const flattenArray = (arr: CommonObjectType[], key = 'children'): CommonObjectType[] =>
	arr.reduce((prev: CommonObjectType[], item: CommonObjectType) => {
		if (Array.isArray(item[key])) {
			prev.push(item);
		}
		return prev.concat(Array.isArray(item[key]) ? flattenArray(item[key], key) : item);
	}, []);
