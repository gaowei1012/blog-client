import { connect } from 'react-redux';
import Articles, { IArticle } from '../components/Articles';
import { REQUEST_ARTICLES } from '../constants';
import { Ipayload } from '../types';

interface IState {
    articles: IArticles
};

interface IArticles {
    articles: IArticle[];
    total: number;
};

// map state props
const mapStateToProps = (state: IState):object => ({
    articles: state.articles.articles,
    total: state.articles.total
});

// export map dispatch to props
export const mapDispatchToProps = (dispatch: any) => ({
    fetchArticle: (payload: Ipayload) => {
        // 通过dispatch分发数据
        dispatch({
            payload,
            type: REQUEST_ARTICLES
        })
    }
});

// 通过connect 合并
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Articles);
