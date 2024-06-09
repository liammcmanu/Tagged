import {LogService, LogType} from "../util/logger";

const logger = new LogService('authService');

class AuthService {
   /**
     * Fetches the OAuth token.
     * @returns {Promise<string | void>} The OAuth token or void.
     */
	public static async getAuthToken(): Promise<string | void> {
		let bearer: string | void = undefined;
		logger.log(LogType.INFO, 'fetching OAuth token');
		await new Promise<void>((resolve) => {
			chrome.identity.getAuthToken(
				/**
				 * @interactive option controls whether or not the user is presented with a sign-in dialog.
				 *  interactive: true means that the user will be prompted with a sign-in or permission dialog if necessary.
				 */
				{interactive: true, 'scopes': ['https://www.googleapis.com/auth/drive.readonly']},
				(token) => {
					if (chrome.runtime.lastError) {
						logger.log(LogType.ERROR, chrome.runtime.lastError?.message);
					} else {
						logger.log(LogType.SUCCESS, 'successfully grabbed OAuth token', token);
						bearer = token;
					}
					resolve();
				}
			);
		});
		return bearer;
	}

	/**
     * Revokes the provided OAuth token.
     * @param {string} token - The OAuth token to revoke.
     * @returns {Promise<void>}
     */
	public static async revokeAuthToken(token: string): Promise<void> {
		logger.log(LogType.INFO, 'revoking OAuth token');
		chrome.identity.removeCachedAuthToken({token: token}, () => {
			logger.log(LogType.SUCCESS, 'successfully revoked OAuth token');
		})
	}

    /**
     * Checks if the user is authenticated.
     * @returns {Promise<boolean>} True if authenticated, false otherwise.
     */
	public static async hasAuthenticated(): Promise<boolean> {
		return new Promise<boolean>((resolve) => {
			chrome.identity.getAuthToken({ interactive: false }, (token) => {
				resolve(!!token);
			});
		});
	}
}

export default AuthService;
