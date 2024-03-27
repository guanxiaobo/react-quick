import React, { FC } from 'react';
import { Spin } from 'antd';
import './style.less';

const Loading: FC = () => (
	<div className="example">
		<Spin tip="Loading..." />
	</div>
);

export default Loading;
