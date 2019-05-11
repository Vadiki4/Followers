import React from 'react';
import { Loader } from '../styled';
import LoaderIcon from '../../media/images/loader.png';

const Button = React.memo(props => {
	const { children, onClick, loading } = props;

	function handleClick(e) {
		if (!loading) onClick(e);
	}

	return (
		<button onClick={handleClick}>
			{loading ? (
				<Loader>
					<div>
						<img src={LoaderIcon} alt='Loading' />
					</div>
				</Loader>
			) : (
				children
			)}
		</button>
	);
});

export default Button;
