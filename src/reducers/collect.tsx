import { collectAction, RECEIVE_COLLECT, REQUEST_COLLECT } from '../actions/Collect';

const collect = (state: object = {}, action: collectAction):object => {
    switch(action.type) {
        case REQUEST_COLLECT:
            return state;
        case RECEIVE_COLLECT:
            return {
                ...state,
                collect: action.collect,
                total: action.total
            };
        default:
            return state;
    }
};

export default collect;