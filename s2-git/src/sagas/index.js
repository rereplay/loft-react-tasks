import {fork} from 'redux-saga/effects';
import {fetchUserWatch} from './users';
import {fetchFollowersWatch} from './followers';
import {authFlow} from './auth';
import request from './request';

export default function*() {
  yield fork(authFlow);
  yield fork(fetchUserWatch);
  // yield fork(fetchFollowersWatch);
  yield fork(request);
}
