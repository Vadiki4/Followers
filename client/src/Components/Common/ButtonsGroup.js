import React from 'react';
import { ButtonsGroup } from '../styled';
import Button from './Button';

const ButtonGroupElement = ({
	handleBack,
	moreFollowers,
	proccessStatus,
	onPaginationClick,
	prevPage,
	nextPage,
}) => {
	return (
		<ButtonsGroup>
			<div>
				<Button onClick={handleBack} loading={false}>
					Back
				</Button>
			</div>
			{moreFollowers && (
				<>
					{prevPage !== '0' && (
						<div>
							<Button
								onClick={() => onPaginationClick('prev')}
								loading={proccessStatus === 'working' ? true : false}
							>
								Prev
							</Button>
						</div>
					)}
					{nextPage !== '0' && (
						<div>
							<Button
								onClick={() => onPaginationClick('next')}
								loading={proccessStatus === 'working' ? true : false}
							>
								Next
							</Button>
						</div>
					)}
				</>
			)}
		</ButtonsGroup>
	);
};

export default ButtonGroupElement;
