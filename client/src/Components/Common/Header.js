import React from 'react';
import { Header } from '../styled';

const HeaderElement = ({ sort, onChange }) => {
	return (
		<Header>
			<h3>Names Followers list</h3>
			<label htmlFor='sorting'>
				Sort
				<select id='sorting' value={sort} onChange={onChange}>
					<option value={''} disabled>
						Sort By
					</option>
					<option value='accountName'>Account Name</option>
					<option value='screenName'>Screen Name</option>
				</select>
			</label>
		</Header>
	);
};

export default HeaderElement;
