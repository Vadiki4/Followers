import { produce } from 'immer';
import {
	SAVE_FOLLOWERS,
	MOVE_CURSOR,
	SHOW_ERROR,
	SET_WORKING_PROCCESS,
	CLEAR_ACCOUNT,
	SAVE_FOLLOWERS_FAILED,
} from '../Sagas/actions';

const initialState = {
	activeAccount: null,
	activeAccountMore: false,
	loadsPulled: 0,
	currentCursor: '-1',
	accountError: null,
	proccessStatus: 'clear',
};

const AccountReducer = (state = initialState, action) =>
	produce(state, draft => {
		switch (action.type) {
			case SAVE_FOLLOWERS: {
				const { tweets } = action.payload.data;
				const { name, cursor } = action.payload;
				draft.activeAccount = name;
				draft.currentCursor = cursor;
				draft.activeAccountMore =
					tweets && tweets.next_cursor_str > 0 ? true : false;

				if (draft.activeAccount === name) {
					draft.loadsPulled += 1;
				} else {
					draft.loadsPulled = 1;
				}
				draft.proccessStatus = 'clear';
				return draft;
			}
			case MOVE_CURSOR: {
				const { cursor } = action.payload;
				draft.currentCursor = cursor;
				draft.proccessStatus = 'clear';
				return draft;
			}
			case SHOW_ERROR: {
				draft.accountError = action.payload;
				draft.proccessStatus = 'clear';
				return draft;
			}
			case SET_WORKING_PROCCESS: {
				draft.proccessStatus = 'working';
				return draft;
			}
			case CLEAR_ACCOUNT: {
				draft.activeAccount = null;
				draft.loadsPulled = 0;
				return draft;
			}
			case SAVE_FOLLOWERS_FAILED: {
				return initialState;
			}
			default:
				return draft;
		}
	});

export default AccountReducer;
