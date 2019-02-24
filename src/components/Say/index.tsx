import * as React from 'react';
import { Pagination, Timeline } from 'antd';
import QueueAnim from 'rc-queue-anim';
import './index.less';

const Item = Timeline.Item;


interface ISay {
    say: string;
    create_at: string;
    _id: string;
};

interface IProps {
    payload: any;
    total: number;
    say: ISay[];
    fetchSay: (payload?: object) => void;
};


class Say extends React.Component<IProps> {

    // 当组件加载完毕之后
    public componentDidMount() {
        this.props.fetchSay({ pageIndex: 1, pageSize: 10 });
    };

    // change 调用 渲染数据
    public onChange = (pageIndex: number, pageSize: number) => {
        this.props.fetchSay({ pageIndex, pageSize });
    };

    // onShowSizeChange
    public onShowSizeChange = (pageIndex: number, pageSize: number) => {
        this.props.fetchSay({ pageIndex, pageSize });
    };

    public render() {
        const { say, total, payload } = this.props;
        const { pageIndex, pageSize } = payload;
        return (
            <div className='time-line-wrp'>
                <div className='time-line'>
                    <Timeline key='Timeline'>
                        { say && 
                            say.map((item: any) => (
                                <Item
                                    key={item._id}
                                >
                                    <QueueAnim
                                        animConfig={[
                                            { opacity: [1, 0], translateX: [0, -150] },
                                            { opacity: [1, 0], translateX: [0, 150] }
                                        ]}
                                        duration={1500}
                                    >
                                        <div className='item' key={item._id}>
                                            <div dangerouslySetInnerHTML={{ __html: item.say }}>
                                                <span>发表于: {new Date(item.create_at).toLocaleString()}</span>
                                            </div>
                                        </div>
                                    </QueueAnim>
                                </Item>
                            ))
                        }
                        <QueueAnim>
                            <Pagination
                                current={pageIndex}
                                pageSize={pageSize}
                                total={total}
                                key='pagination'
                                showSizeChanger={true}
                                onChange={this.onChange}
                                onShowSizeChange={this.onShowSizeChange}
                            />
                        </QueueAnim>
                    </Timeline>
                </div>
            </div>
        )
    }
}

export default Say;