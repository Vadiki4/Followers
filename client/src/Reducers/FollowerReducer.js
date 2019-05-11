import { produce } from 'immer';
import { SAVE_FOLLOWERS } from '../Sagas/actions';

const initialState = {};

const FollowerReducer = (state = initialState, action) =>
	produce(state, draft => {
		switch (action.type) {
			case SAVE_FOLLOWERS: {
				const { tweets } = action.payload.data;
				const { name, cursor } = action.payload;
				if (!draft[name]) draft[name] = {};
				draft[name][cursor] = { ...tweets };
				return draft;
			}
			default:
				return draft;
		}
	});

export default FollowerReducer;
