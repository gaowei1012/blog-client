import * as React from 'react';
import QueueAnim from 'rc-queue-anim';
import { ReactHTML } from 'react';

interface IProps {
    childern: ReactHTML
};

// 公共动画
const QueueAnimTop = (props: IProps) => {
    <QueueAnim
        animConfig={[
            { opacity: [1, 0], translateY: [0, 50] },
            { opacity: [1, 0], translateY: [0, -50] }
        ]}
    >
        {props.childern}
    </QueueAnim>
};

export default QueueAnimTop;
