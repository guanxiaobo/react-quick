import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import Router from '@/route';
import Header from '../components/Header';
import style from './style.module.less';

const { Sider } = Layout;

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
	const key = String(index + 1);

	return {
		key: `sub${key}`,
		icon: React.createElement(icon),
		label: `subnav ${key}`,

		children: new Array(4).fill(null).map((_, j) => {
			const subKey = index * 4 + j + 1;
			return {
				key: subKey,
				label: `option${subKey}`
			};
		})
	};
});

function App() {
	const [routerList, setRouterList] = useState<CommonObjectType[]>([]);

	useEffect(() => {
		setRouterList([]);
	}, []);

	return (
		<div className={style.app}>
			<Header />
			<Layout className={style.container}>
				<Sider width={232} className={style.sider}>
					<Menu
						mode="inline"
						defaultSelectedKeys={['1']}
						defaultOpenKeys={['sub1']}
						style={{ height: '100%', borderRight: 0 }}
						items={items2}
					/>
				</Sider>
				<Layout className={style.contentWrapper}>
					<div className={style.content}>
						<Router routerConfig={routerList} />
					</div>
				</Layout>
			</Layout>
		</div>
	);
}

export default App;
