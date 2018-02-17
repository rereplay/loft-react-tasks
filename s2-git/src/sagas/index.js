import {fork} from 'redux-saga/effects';
import {fetchUserWatch} from './users';
import {fetchFollowersWatch} from './followers';
import {setTokenWatch} from './auth';
// import {authFlow} from './auth';

export default function*() {
  // yield fork(authFlow);
  yield fork(fetchUserWatch);
  yield fork(fetchFollowersWatch);
  yield fork(setTokenWatch);
}
