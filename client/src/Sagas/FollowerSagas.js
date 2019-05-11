import { call, put } from 'redux-saga/effects';
import get from 'lodash/get';
import {
	SAVE_FOLLOWERS,
	SAVE_FOLLOWERS_FAILED,
	MOVE_CURSOR,
	SHOW_ERROR,
	SET_WORKING_PROCCESS,
} from './actions';
import Api from '../Utilities/Api';

export function* getFollowers(data) {
	try {
		const { cursor, name, accountCursors } = data.payload;
		if (accountCursors && accountCursors.includes(cursor)) {
			yield put({
				type: MOVE_CURSOR,
				payload: { cursor: cursor ? cursor : '-1' },
			});
		} else {
			yield put({ type: SET_WORKING_PROCCESS });
			const followers = yield call(() =>
				Api.followers().getFollowersByName(name, cursor)
			);
			const isErrorCodeFound = get(followers, ['data', 0, 'code'], false);
			if (isErrorCodeFound) {
				if (isErrorCodeFound === 88) {
					yield put({
						type: SHOW_ERROR,
						payload: 'Twitter\'s API Rate limit reached!',
					});
				} else {
					yield put({
						type: SHOW_ERROR,
						payload:
							'Followers not found for this user, please hit Back and try again',
					});
				}
			} else if (followers && followers.data) {
				yield put({
					type: SAVE_FOLLOWERS,
					payload: {
						data: followers.data,
						name,
						cursor: cursor ? cursor : '-1',
					},
				});
			}
		}
	} catch (error) {
		console.error(error);
		yield put({ type: SAVE_FOLLOWERS_FAILED, message: error.message });
	}
}
