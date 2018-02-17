import {setToken} from '../actions/auth';
import {takeLatest} from 'redux-saga/effects';
import {setTokenApi} from '../api';

function setTokenSaga(action) {
  setTokenApi(action.payload);
}

export function* setTokenWatch() {
  yield takeLatest(setToken, setTokenSaga);
}
