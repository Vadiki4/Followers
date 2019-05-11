import React from 'react';
import { Follower } from '../styled';
import LinkIcon from '../../media/images/link.png';

const FollowerElement = ({ user }) => {
	return (
		<Follower>
			<div>
				<img src={user.profile_image_url} alt='Profile Image' />
			</div>
			<div>
				<h5>{user.name}</h5>
				<h6>{user.screen_name}</h6>
			</div>
			<div>
				{user.url && (
					<a href={user.url} target='_blank' rel='noopener noreferrer'>
						<img src={LinkIcon} alt='' />
					</a>
				)}
			</div>
		</Follower>
	);
};

export default FollowerElement;
