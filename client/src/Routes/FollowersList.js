import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
	currentAccountFollowersSelector,
	getCurrentAccount,
	getCurrentAccountMore,
	currentAccountFollowersCursorsSelector,
	getAccountError,
	getProccessStatus,
} from '../Selectors';
import { GET_PAGE, CLEAR_ACCOUNT } from '../Sagas/actions';
import { FollowersPage, Followers } from '../Components/styled';
import Header from '../Components/Common/Header';
import Follower from '../Components/Common/Follower';
import ButtonsGroup from '../Components/Common/ButtonsGroup';
import ErrorElement from '../Components/Common/ErrorElement';

const FollowersList = props => {
	const {
		followers,
		dispatch,
		activeAccount,
		history,
		moreFollowers,
		accountCursors,
		errorMessage,
		proccessStatus,
	} = props;
	const { next_cursor_str, previous_cursor_str, users = [] } = followers;
	const [state, setState] = useState({ sort: '' });
	const followersListRef = useRef();
	const { sort } = state;

	useEffect(() => {
		if (!activeAccount) history.push('/');
	}, [activeAccount, history]);

	function handlePageClick(pageStep) {
		setState(prevState => {
			return { ...prevState, loading: true };
		});
		followersListRef.current.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
		dispatch({
			type: GET_PAGE,
			payload: {
				cursor: pageStep === 'prev' ? previous_cursor_str : next_cursor_str,
				name: activeAccount,
				accountCursors,
			},
		});
	}

	function handleBack() {
		dispatch({ type: CLEAR_ACCOUNT });
	}

	function handleSortOption({ target }) {
		const { value } = target;
		setState({ sort: value });
	}

	function getUsers() {
		switch (sort) {
			case '': {
				return users;
			}
			case 'accountName': {
				return users.sort((a, b) => {
					if (a.name < b.name) return -1;
					if (a.name > b.name) return 1;
					return 0;
				});
			}
			case 'screenName': {
				return users.sort((a, b) => {
					if (a.screen_name < b.screen_name) return -1;
					if (a.screen_name > b.screen_name) return 1;
					return 0;
				});
			}
			default: {
				return users;
			}
		}
	}

	return (
		<FollowersPage>
			<Followers ref={followersListRef}>
				<Header sort={sort} onChange={handleSortOption} />
				{errorMessage ? (
					<ErrorElement>{errorMessage}</ErrorElement>
				) : (
					getUsers().map((user, index) => {
						return <Follower key={index} user={user} />;
					})
				)}
			</Followers>
			<ButtonsGroup
				handleBack={handleBack}
				moreFollowers={moreFollowers}
				proccessStatus={proccessStatus}
				onPaginationClick={handlePageClick}
				prevPage={previous_cursor_str}
				nextPage={next_cursor_str}
			/>
		</FollowersPage>
	);
};

function mapStateToProps(state) {
	return {
		followers: currentAccountFollowersSelector(state),
		activeAccount: getCurrentAccount(state),
		moreFollowers: getCurrentAccountMore(state),
		accountCursors: currentAccountFollowersCursorsSelector(state),
		errorMessage: getAccountError(state),
		proccessStatus: getProccessStatus(state),
	};
}

export default withRouter(connect(mapStateToProps)(FollowersList));
