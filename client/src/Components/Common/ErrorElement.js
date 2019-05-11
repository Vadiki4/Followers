import React from 'react';
import { ErrorEl } from '../styled';
import ErrorIcon from '../../media/images/error.png';

const ErrorElement = React.memo(({ children }) => (
	<ErrorEl>
		<img src={ErrorIcon} alt='Error' />
		{children}
	</ErrorEl>
));

export default ErrorElement;
