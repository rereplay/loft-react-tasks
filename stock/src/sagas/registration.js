import { takeLatest, call, put } from "redux-saga/effects";
import {
  registrationRequest,
  registrationSuccess,
  registrationFailure
} from "../actions/registration";
import { registration } from "../helpers/api";
import { setToken } from '../helpers/local_storage';

function* registrationFlow(action) {
  try {
    const response = yield call(registration, action.payload);
    const token = response.data.jwt;
    yield call(setToken, token);
    yield put(registrationSuccess(token));
  } catch (e) {
    put(registrationFailure());
  }
}

export default function* registrationWatcher() {
  yield takeLatest(registrationRequest, registrationFlow);
}
