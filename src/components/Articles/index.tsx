import * as React from 'react';
import { Card, Pagination } from 'antd';
import QueueAdmin from 'rc-queue-anim';
import { Link } from 'react-router-dom';
import { Ipayload } from '../../types';
// import { format } from '../../common';
import './index.less';

export interface IArticle {
    _id: string,
    tag: ITag,
    title: string,
    create_at: string,
    access: string,
    type: string,
    abstract: string
};

interface ITag {
    color: string,
    title: string
};

interface IHistory {
    push: (pathname: string) => void 
};

interface IArticles {
    articles: IArticle[],
    history: IHistory,
    total: number,
    fetchArticle: (payload: Ipayload) => void
};

class Articles extends React.Component<IArticles> {

    // state
    public state = {
        pageIndex: 1,
        pageSize: 10
    };

    // 在组件完成初始化后加载渲染数据
    public componentDidMount() {
        // 请求后端接口
        this.props.fetchArticle(this.state);
    };

    // 分页器
    public onChange = (page: number, pageSize: number) => {
        this.setState(
            {
                pageIndex: page,
                pageSize
            },
            () => {
                // 异步请求后端数据,更新this.state的状态
                this.props.fetchArticle(this.state);
            }
        )
    };

    public render() {
        const { articles = [], total } = this.props;
        const { pageIndex, pageSize } = this.state;
        return (
            <div>
                {/* 动画组价 */}
                <QueueAdmin
                    animConfig={[
                        { opacity: [1, 0], tanslateY: [0, 50]},
                        { opacity: [1, 0], tanslateY: [0, -50]},
                    ]}
                >
                    {articles.map((item: any) => (
                        <Card
                            key={item._id}
                            bordered={false}
                            hoverable={true}
                            className='article'
                            type="inner"
                        >
                            <div>
                                <h3>{item.title}</h3>
                                <p className='tag'>
                                    <span>发表于: {item.create_at}</span>
                                    <span>标签: {item.tag}</span>
                                    <span>浏览: {item.access}</span>
                                </p>
                                <div className='abstract'>
                                    <Link to={`/article/${item._id}`}>
                                        <span className='link'>阅读全文</span>
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    ))}
                </QueueAdmin>
                {/* 分页 */}
                <QueueAdmin>
                    <Pagination
                        current={pageIndex}
                        pageSize={pageSize}
                        total={total}
                        onChange={this.onChange}
                        key="pagination"
                    />
                </QueueAdmin>
            </div>
        )
    };
};

export default Articles;