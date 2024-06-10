import React, { Suspense, useEffect, useState } from 'react';
import AuthService from '../service/authService';
import {Home} from './home/home';
import {Auth} from './auth/auth';
import {LogService, LogType} from "../util/logger";
import {Loader} from './loading/loading';

const logger = new LogService('appFrontend');

export const App: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [authToken, setAuthToken] = useState<string | void>(null);

    useEffect(() => {
        const checkAuthentication = async () => {
			logger.log(LogType.INFO, 'checking authentication');
            const authStatus = await AuthService.hasAuthenticated();
            setIsAuthenticated(authStatus);
			logger.log(LogType.INFO, 'fetched authentication', authStatus.toString());
            if (authStatus) {
                const token = await AuthService.getAuthToken();
                setAuthToken(token);
				logger.log(LogType.INFO, 'grabbed oauth token', token || 'null'); 
            }
        };
        checkAuthentication();
    }, []);

    return (
        <>
			<div>
				<Suspense fallback={<Loader></Loader>}>
					{!isAuthenticated && <Auth />}
					{isAuthenticated && authToken && <Home token={authToken} />}
				</Suspense>
			</div>
			<div className='footer'>
				<div>
					<a className='footer-content' target='_blank' href='https://www.instagram.com/liammcmanus__'>
						<i className="fa-brands fa-instagram footer-icons"></i><span>liammcmanus__</span>
					</a>
					<a className='footer-content' target='_blank' href='https://github.com/liammcmanu'>
						<i className="fa-brands fa-github footer-icons"></i><span>liammcmanu</span>
					</a>
				</div>
			</div>
		</>
    );
}
