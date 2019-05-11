import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import SearchPage from './Routes/SearchPage';
import FollowersList from './Routes/FollowersList';

const router = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={SearchPage} />
				<Route path='/followers' component={FollowersList} />
				<Redirect to='/' />
			</Switch>
		</Router>
	);
};

export default router;
