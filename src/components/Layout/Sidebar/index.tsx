import * as React from 'react';
import { Card, Tag, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { headerImg } from 'src/common';
import './index.less';

const { Meta } = Card;

interface ITag {
    title: string;
    color: string;
};

export interface IInfo {
    classList: string[];
    tag: ITag[];
    ArticleNum: number;
    access: number;
    present: string;
    name: string;
    authorImg: string;
    lastArticle: any[];
};

export interface IProps {
    info: IInfo;
    fetchArticle: (payload: object) => void;
};

const Sidebar = (props: IProps) => {
    const {
        tag,
        name,
        access,
        present,
        ArticleNum,
        authorImg,
        lastArticle,
    } = props.info;

    return (
        <div className='Sidebar'>
            <Card
                hoverable={true}
                className='card'
                cover={<img src={headerImg} />}
            >
                <div className='authorImg'>
                    <img src={authorImg} alt=""/>
                </div>
                <Meta
                    title={
                        <div>
                            <span className='card-title'>{name}</span>
                        </div>
                    }
                    description={
                        <div>
                            <p className='abstract'>{present}</p>
                            <p className='abstract'>
                                <span> 文章 - {ArticleNum} </span>
                                <span style={{marginRight: 10, marginLeft: 10}}>|</span>
                                <span> 访问 - {access} </span>
                            </p>
                        </div>
                    }
                />
            </Card>
            <Card
                title="FOLLOW ME"
                hoverable={true}
                className='card'
            >
                <div className='icon-git-wrp'>
                    <div className='call'>
                        <Tooltip title='简历'>
                            <Link to='resume'>&#xe60e;</Link>
                        </Tooltip>
                        <Tooltip title="GitHub">
                            <a href="github.com/gmw-zjw/">GitHub</a>
                        </Tooltip>
                        <Tooltip
                            title={
                                <img
                                    className='wx'
                                    src="#"
                                    alt="wx"
                                    width={100}
                                    height={100}
                                />
                            }
                        >
                            <a href="javascript:;">&#xe7e5;</a>
                        </Tooltip>
                        <Tooltip title='知乎'>
                            <a href="javascript:;">知乎</a>
                        </Tooltip>
                    </div>
                </div>
            </Card>
            <Card title="云标签" hoverable={true} className='card'>
                {
                    tag && tag.map((item: any) => (
                        <Tag
                            key={item.title}
                            color={item.color}
                            className="tag"
                            onClick={() => props.fetchArticle({
                                pageIndex: 1,
                                pageSize: 10,
                                tagTitle: item.title,
                            })}
                        >
                            <Link to='/'>{item.title}</Link>
                        </Tag>
                    ))
                }
            </Card>
            <Card title="文章列表" hoverable={true} className="card">
                <ul>
                    {lastArticle.map((item, index) => (
                        <li key={index} className='tag'>
                            <Link to={`/article/${item._id}`}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </Card>
        </div>
    )
};

export default Sidebar;