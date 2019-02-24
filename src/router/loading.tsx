import { Spin } from 'antd';
import * as React from 'react';
import '../index.less';

const Loading = () => (
    <div className='spin'>
        <Spin size="large"/>
    </div>
);

export default Loading;
