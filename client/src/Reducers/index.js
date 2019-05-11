import { combineReducers } from 'redux';
import AccountReducer from './AccountReducer';
import FollowerReducer from './FollowerReducer';

export const reducers = combineReducers({
	accounts: AccountReducer,
	followers: FollowerReducer,
});
