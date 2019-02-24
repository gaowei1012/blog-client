import { InfoAction } from '../actions';
import { REQUEST_INFO, RECEIVE_INFO } from '../constants';

const info = (state: object = {}, action: InfoAction ): object => {
    switch(action.type) {
        case REQUEST_INFO:
            return state;
        case RECEIVE_INFO:
            return { ...state, ...action.info };
        default:
            return state;
    }
};

export default info;