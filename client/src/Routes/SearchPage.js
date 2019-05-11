import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getPulledLoads, getAccountError } from '../Selectors';
import { GET_FOLLOWERS } from '../Sagas/actions';
import {
	HomePage,
	Input,
	NameBox,
	SubmitButton,
	Error,
} from '../Components/styled';
import profileImg from '../media/images/profile.png';

function Search(props) {
	const [state, setState] = useState({ isErrored: false, tName: 'nodejs' });
	const { dispatch, history, pulledLoads, errorMessage } = props;
	const { isErrored, tName } = state;

	useEffect(() => {
		if (pulledLoads > 0) {
			history.push('/followers');
		}
	}, [history, pulledLoads]);

	function getFollowers() {
		if (tName.length > 1) {
			setState(prevState => {
				return { ...prevState, isErrored: false };
			});
			dispatch({ type: GET_FOLLOWERS, payload: { name: tName } });
		} else {
			setState(prevState => {
				return { ...prevState, isErrored: true };
			});
		}
	}

	function inputChange({ target }) {
		const { value } = target;
		setState(prevState => {
			return {
				...prevState,
				tName: value,
			};
		});
	}

	function alertError() {
		setTimeout(() => {
			setState(prevState => {
				return { ...prevState, isErrored: false };
			});
		}, 5000);
	}

	return (
		<HomePage>
			<NameBox>
				<div>
					<h4>Followers Lookup</h4>
				</div>
				<div>
					<img src={profileImg} alt='Profile Badge' />
				</div>
				<div>
					<label htmlFor='accountName'>
						Enter Twitter account name
						<Input id='accountName' value={tName} onChange={inputChange} />
					</label>
					{isErrored && <Error>name must have at least 2 characters</Error>}
					{errorMessage && <Error>{errorMessage}</Error>}
				</div>
				<SubmitButton onClick={getFollowers}>Get Followers</SubmitButton>
			</NameBox>
			{errorMessage && alertError()}
		</HomePage>
	);
}

function mapStateToProps(state) {
	return {
		pulledLoads: getPulledLoads(state),
		errorMessage: getAccountError(state),
	};
}

export default withRouter(connect(mapStateToProps)(Search));
