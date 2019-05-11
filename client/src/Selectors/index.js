import { createSelector } from 'reselect';
import get from 'lodash/get';

//getters
export const getFollowers = state => state.followers;
export const getCurrentAccount = state => state.accounts.activeAccount;
export const getCurrentAccountMore = state => state.accounts.activeAccountMore;
export const getCurrentCursor = state => state.accounts.currentCursor;
export const getAccountError = state => state.accounts.accountError;
export const getPulledLoads = state => state.accounts.loadsPulled;
export const getProccessStatus = state => state.accounts.proccessStatus;

// selectors
export const currentAccountFollowersSelector = createSelector(
	[getFollowers, getCurrentAccount, getCurrentCursor],
	(followers, currentAccount, cursor) =>
		get(followers, [currentAccount, cursor], [])
);

export const currentAccountFollowersCursorsSelector = createSelector(
	[getFollowers, getCurrentAccount],
	(followers, currentAccount) => {
		if (followers[currentAccount]) {
			return Object.keys(followers[currentAccount]);
		}
	}
);
