import { all, call, put, takeEvery } from 'redux-saga/effects';
import { RECEIVE_SAY, REQUEST_SAY, SAYAction } from '../actions/Say';
import { getSay } from '../services';

function* yieldSay (action: SAYAction) {
    const result = yield call(getSay, action.payload);
    yield put({ type: RECEIVE_SAY, ...result, payload: action.payload });
};

export function* watchYieldSay() {
    yield all([takeEvery(REQUEST_SAY, yieldSay)])
};
