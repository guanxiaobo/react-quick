import React, { FC, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from '../components/Loading';

interface IRouterProps {
	routerConfig: CommonObjectType[];
}

const Router: FC<IRouterProps> = (props) => {
	const { routerConfig = [] } = props;

	return (
		<Suspense fallback={<Loading />}>
			<Routes>
				{routerConfig.map((menu) => (
					<Route path={menu.path} key={menu.name} element={<menu.component />}></Route>
				))}
			</Routes>
		</Suspense>
	);
};

export default Router;
