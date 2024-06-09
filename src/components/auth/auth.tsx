import React, {Suspense, useState} from 'react';
import {LogService, LogType} from "../../util/logger";
import AuthService from '../../service/authService';
import {Home} from '../home/home';
import {Loader} from '../loading/loading';

import './auth.css';

const logger = new LogService('authFrontend')

/**
 * Renders the authentication component.
 * This component handles user authentication and displays the appropriate UI based on the user's authentication status.
 */
export const Auth = () => {
	const [disabled, setDisabled] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [token, setToken] = useState(undefined);

	/**
	 * Handles the click event when the user clicks the sign-in button.
	 * Fetches the OAuth token and updates the component state accordingly.
	 */
	const handleClick = async () => {
		setDisabled(true);
		await AuthService.getAuthToken().then(res => {
			if (res) {
				logger.log(LogType.SUCCESS, 'fetched OAuth token', res);
				setToken(res);
				setIsLoggedIn(true);
			} else {
				logger.log(LogType.ERROR, 'failed to fetch OAuth token');
				setDisabled(false);
			}
		}).catch((error) => {
			logger.log(LogType.ERROR, 'failed to fetch OAuth token', error);
		});
	}

	return isLoggedIn ? 
		<Suspense fallback={<Loader></Loader>}>
			<Home token={token}/> 
		</Suspense>
	: (
		<div className="sign-in-page">
			<i className="fa-solid fa-tag logo"></i>
			<div className="title-container">
				<h2 className="title">
					Welcome to Tagged!
				</h2>
				<div className="login-with-google-txt">
					Please Sign-in with your google account to continue.
				</div>
			</div>
			<div>
				<button 
					className='button-primary sign-in-btn' 
					onClick={handleClick} 
					disabled={disabled}
				>
					<i className="fab fa-google"></i> 
					<span className="button-txt">
						Sign in with Google
					</span>
				</button>
			</div>
		</div>
	);
}
