import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from "../actions/users";
import { takeLatest, call, put } from "redux-saga/effects";
import { getUserInformation, getTokenOwner } from "../api";
import request from './request';

export function* fetchUserSaga(action) {
  try {
    const handler =
      action.payload === "me" ? getTokenOwner : getUserInformation;
    const user = yield call(request, getTokenOwner);
    yield put(fetchUserSuccess(user));
  } catch (error) {
    yield put(fetchUserFailure(error));
  }
};

export function* fetchUserWatch() {
  yield takeLatest(fetchUserRequest, fetchUserSaga);
}
