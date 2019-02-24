import { connect } from 'react-redux';
import TimeFile, { IArticle } from '../components/TimeFile';
import { REQUEST_ARTICLES } from '../constants';
import { Ipayload } from '../types';

interface IState {
    articles: IArticles;
};

interface IArticles {
    articles: IArticle[];
    total: number;
};

const mapStateToProps = (state: IState):object => {
    return {
        articles: state.articles.articles,
        total: state.articles.total
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchArticle: (payload: Ipayload) => {
            dispatch({ type: REQUEST_ARTICLES, payload })
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TimeFile);