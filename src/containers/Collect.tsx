import { connect } from 'react-redux';
import { DELETE_COLLECT, REQUEST_COLLECT } from '../actions/Collect';
import Collect, { ICollect, IPayload } from '../components/Collect';

interface ICollects {
    collect: ICollect[];
    payload: IPayload;
    total: number;
};

interface IState {
    collect: ICollects
};

// map state to props
const mapStateToProps = ({ collect }: IState) => ({
    collect: collect.collect,
    payload: collect.payload || { pageIndex: 1, pageSize: 16 },
    total: collect.total || 0
});

const mapDispatchToProps = (dispatch: any) => ({
    // 删除
    deleteCollect: (id: string) => {
        dispatch({ type: DELETE_COLLECT, payload: { _id: id }})
    },
    fetchCollect: (payload: object = { pageIndex: 1, pageSize: 16 }) => {
        dispatch({ type: REQUEST_COLLECT, payload })
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Collect);