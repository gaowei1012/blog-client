import 'whatwg-fetch';
import { blogFetch } from '../common';
import { Ipayload } from '../types';


// 请求全部文章
export const fetchArticles = (payLoad: Ipayload) => blogFetch('/get-articles', payLoad);

// 个人摘要
export const fetchResume = () => blogFetch('/get-resume');

// 根据当前个人id 请求单个文章 
export const fetchArticle = (Id: string) => blogFetch('/get-article', { Id });

// info
export const fetchInfo = () => blogFetch('/get-info');

// 获取个人说明
export const getSay = (payLoad: object) => blogFetch('/get-say', payLoad);

// 获取收货
export const fetchCollect = (payLoad: object) => blogFetch('/get-collect', payLoad);