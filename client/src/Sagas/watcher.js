import { takeLatest } from 'redux-saga/effects';
import { getFollowers } from './FollowerSagas';
import { GET_FOLLOWERS, GET_PAGE } from '../Sagas/actions';

export default function* Watcher() {
	yield takeLatest(GET_FOLLOWERS, getFollowers);
	yield takeLatest(GET_PAGE, getFollowers);
}
