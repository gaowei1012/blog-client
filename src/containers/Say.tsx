import { connect } from 'react-redux';
import { REQUEST_SAY } from '../actions/Say';
import Say from '../components/Say';

const mapStateToProps = ({ say }: any) => ({
    payload: say.parload || { pageIndex: 1, pageSize: 10 },
    say: say.say,
    total: say.total || 0
});

const mapDispatchToProps = (dispatch: any) => ({
    fetchSay: ( payload: object = {} ) => {
        dispatch({ type: REQUEST_SAY, payload })
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Say);