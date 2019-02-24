import { withRouter } from 'react-router-dom';
import App from '../components/App';
import { IInfo } from '../components/Layout/Sidebar'
import { REQUEST_ARTICLE, REQUEST_INFO } from '../constants';
import { connect } from 'react-redux';
import { IPayload } from 'src/actions/Collect';

interface IInfoInterface {
    info: IInfo
};

const mapStoreToProps = ({ info }: IInfoInterface) => {
    return { info };
};

export const mapDispatchToProps = (dispatch: any) => {
    return {
        actions: dispatch({ type: REQUEST_INFO }),
        fetchArticle: (payload: IPayload) => {
            dispatch({
                payload,
                type: REQUEST_ARTICLE
            });
        }
    };
};

const AppMap: any = connect(
    mapStoreToProps,
    mapDispatchToProps
)(App);

export default withRouter(AppMap);