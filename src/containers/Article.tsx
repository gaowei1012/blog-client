import { connect } from 'react-redux';
import Article, { IArticle } from '../components/Article';
import { REQUEST_ARTICLE } from '../constants';

interface IArticles {
    acticle: IArticle
};

const mapStateProps = ( state: IArticles ):object => {
    return { article: state.acticle };
};

export const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchArticle: (Id: string) => dispatch({ type: REQUEST_ARTICLE, Id })
    };
};

export default connect(
    mapStateProps,
    mapDispatchToProps
)(Article);