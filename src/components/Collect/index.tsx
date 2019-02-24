import * as React from 'react';
import { Card, Col, Modal, Pagination, Row } from 'antd';
import QueueAnim from 'rc-queue-anim';
// import{ format } from '../../common';
import './index.less';

export interface ICollect {
    content?: string;
    _id?: string;
    create_at?: string;
    title?: string;
};

interface IState {
    collectItem: ICollect;
    visible: boolean;
};

export interface IPayload {
    pageIndex: number;
    pageSize: number;
};

interface IProps {
    collect: ICollect[];
    payload: IPayload;
    total: number;
    deleteCollect: (id: string) => void;
    fetchCollect: (payload: object) => void;
};

class Collect extends React.Component<IProps> {

    public state: IState = {
        collectItem: {},
        visible: false
    };

    // 组件初始化完成后加载
    public componentDidMount() {
        this.props.fetchCollect(this.state);
    };

    // card add click
    public cardClick = (item: ICollect) => {
        this.setState({
            collectItem: item,
            visible: true
        });
    };

    // onChange
    public onChange = (pageIndex: number, pageSize: number) => {
        this.props.fetchCollect({ pageIndex, pageSize});
    };

    public render() {
        const { visible, collectItem } = this.state;
        const { collect, payload, total } = this.props;
        const { pageIndex, pageSize } = payload;
        const replaceHtml = /<(?:.|\s)*?/g;
        return (
            <div className='collect'>
                <Modal
                    title={<span className='title'>{collectItem.title}</span>}
                    visible={visible}
                    footer={false}
                    bodyStyle={{padding: '6px 20px 15px 20px', overflow: 'hidden'}}
                    onCancel={() => {
                        // 关闭modal
                        this.setState({visible: false })
                    }}
                    // 对话框外部的类名
                    wrapClassName='collect-card-wrp'
                >
                    <div className='collect-crad'>
                        <span className='create_at'>
                            发表于: {collectItem.create_at}
                        </span>
                        {
                            collectItem.content && (
                                // 富文本
                                <div dangerouslySetInnerHTML={{ __html: collectItem.content}}></div>
                            )
                        }
                        <div className='collect-author'>Apple</div>
                    </div>
                </Modal>
                {/* tarsform 动画 */}
                <QueueAnim
                    // 持续时长
                    duration={1500}
                    animConfig={[
                        { opacity: [1, 0], translateX: [0, 150] },
                        { opacity: [1, 0], translateX: [0, -150] }
                    ]}
                >
                    <Row
                        className='collect-card-wrp'
                        key={collectItem._id}
                    >
                        {
                            collect.map((item: any) => (
                                <Col
                                    key={item._id}
                                    sm={22}
                                    md={11}
                                    offset={1}
                                >
                                    <Card
                                        key={item._id}
                                        hoverable={true}
                                        bordered={false}
                                        className='collect-card'
                                        type="inner"
                                        onClick={() => this.cardClick(item)}
                                    >
                                        <div className='title'>{item.title}</div>
                                        <span className='create_at'>{item.create_at}</span>
                                        <div className='collect-content'>
                                            {item.content && item.content.replace(replaceHtml, '')}
                                        </div>
                                        <div className='author'>Apple</div>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </QueueAnim>
                <div className='pagination'>
                        <Pagination
                            current={pageIndex}
                            pageSize={pageSize}
                            total={total}
                            onChange={this.onChange}
                        />
                </div>
            </div>
        )
    };
}

export default Collect;
