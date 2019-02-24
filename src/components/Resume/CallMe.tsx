import * as React from 'react';
import { Tooltip } from 'antd';
import './index.less';

// 直接返回一个jsx
const CallMe = () => (
    <div className='call-me'>
        <p className='title'>call me</p>
        <div className='tag'>
            <span>...</span>
        </div>
        <p>...</p>
        <div className='call'>
            <Tooltip title="github">
                <a href='#'>&#xea0a;</a>
            </Tooltip>
            <Tooltip title="博客">
                <a href="#">&#xe661;</a>
            </Tooltip>
        </div>
        <div className='footer'>
            <div className='item'>All Rights Reserced</div>
        </div>
    </div>
);

export default CallMe;