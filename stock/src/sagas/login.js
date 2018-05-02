import { takeLatest, call, put } from "redux-saga/effects";
import { loginRequest, loginSuccess, loginFailure } from "../actions/login";
import { login } from "../helpers/api";
import { setToken, getToken } from "../helpers/local_storage";
import { setTokenApi, clearTokenApi } from "../helpers/api";
import { probeToken } from "../actions/token";

function* loginFlow(action) {
  try {
    const response = yield call(login, action.payload);
    const token = response.data.jwt;
    yield call(setToken, token);
    yield put(loginSuccess(token));
    yield call(setTokenApi, token);
  } catch (e) {
    yield put(loginFailure());
  }
}

function* probeTokenFlow(action) {
  try {
    const token = getToken();
    if (token) {
      yield put(loginSuccess(token));
      yield call(setTokenApi, token);
    }
  } catch (e) {}
}

export default function* loginWatcher() {
  yield takeLatest(loginRequest, loginFlow);
  yield takeLatest(probeToken, probeTokenFlow);
}
