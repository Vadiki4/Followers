import styled, { keyframes } from 'styled-components';

export const HomePage = styled.div`
	width: 100%;
	position: relative;
	background: #5c5cff;
	height: 947px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const NameBox = styled.div`
	width: 350px;
	height: 350px;
	background: #fff;
	border-radius: 4px;
	overflow: hidden;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	padding: 20px;
	box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.3);

	h4 {
		color: #2d2d2d;
		font-size: 24px;
		padding-bottom: 20px;
	}

	img {
		padding-bottom: 45px;
	}

	label {
		color: #2d2d2d;
		font-size: 16px;
		font-weight: 500;
	}
`;

export const Input = styled.input`
	width: 100%;
	background: #f3f3f3;
	line-height: 40px;
	border-radius: 4px;
	color: #2d2d2d;
	padding-left: 10px;
	font-weight: 500;
	border: solid 1px lightgray;
	margin-top: 10px;
`;

export const SubmitButton = styled.button`
	width: 80%;
	background: #ffe187;
	color: #2d2d2d;
	border-radius: 4px;
	padding: 10px 20px;
	margin: 20px 0;
	font-weight: 500;
	font-size: 16px;
	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
`;

export const Error = styled.p`
	color: red;
	// padding: 10px 20px;
	// margin: 20px 0;
	font-weight: 400;
	font-size: 14px;
`;

export const FollowersPage = styled.div`
	width: 100%;
	position: relative;
	background: #5c5cff;
	height: 947px;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
`;

export const Followers = styled.div`
	width: 600px;
	max-width: 95%;
	height: 750px;
	max-height: 95%;
	background: #fff;
	border-radius: 4px;
	overflow: auto;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	list-style: none;
	box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.3);
`;

export const Header = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	border-bottom: solid 1px #eaeaea;

	h3 {
		color: #2d2d2d;
		font-size: 24px;
		font-weight: 500;
		padding: 10px 0;
		width: 100%;
		// text-align: center;
		padding-left: 10px;
	}

	label {
		display: flex;
		align-items: center;
		font-size: 18px;
		font-weight: 500;
	}

	label select {
		background: #ececec;
		padding: 5px 20px;
		color: #2d2d2d;
		margin: 0 10px;
		font-weight: 500;
		border-radius: 4px;
		border: solid 1px lightgray;
		cursor: pointer;
	}
`;

export const Follower = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	border-bottom: solid 1px #f5f5f5;

	:last-of-type {
		border: none;
	}

	div:first-child {
		padding-right: 20px;
		height: 50px;

		img {
			border-style: none;
			object-fit: cover;
			width: 55px;
			height: 50px;
			border-radius: 50%;
			padding: 2.5px 5px 2.5px 5px;
		}
	}

	div:nth-child(2) {
		margin-right: auto;
	}

	div:last-child {
		padding-right: 20px;
	}
`;

export const ButtonsGroup = styled.div`
	width: 600px;
	max-width: 95%;
	display: flex;
	align-items: center;
	// justify-content: space-between;
	margin-top: 20px;
	height: 40px;

	> div {
		background: #fff;
		border-radius: 4px;
		box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
		width: 70px;
		height: 42px;
		display: flex;
		justify-content: center;
	}

	> div:first-child {
		margin-right: auto;
	}

	> div:last-child {
		margin-left: 20px;
	}

	> button {
		color: #2d2d2d;
		font-weight: 500;
	}
`;

export const ErrorEl = styled.span`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: #616161;
	font-weight: 600;
	font-size: 3vw;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;

	img {
		margin-bottom: 30px;
	}
`;

const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`;

export const Loader = styled.span`
	display: block;

	> div {
		// padding: 10px 20px;
		width: 30px;
		height: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	> div > img {
		animation: ${rotate} 2s linear infinite;
	}
`;
