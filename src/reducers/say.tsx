import { SAYAction, RECEIVE_SAY, REQUEST_SAY } from '../actions/Say';

const say = ( state = { say: [] }, action: SAYAction ) => {
    switch(action.type) {
        case REQUEST_SAY:
            return state;
        case RECEIVE_SAY:
            return {
                payload: action.payload,
                say: action.say,
                total: action.say
            };
        default:
            return state;
    };
};

export default say;