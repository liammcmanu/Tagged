import {LogService, LogType} from "../util/logger";

const logger = new LogService('driveService');

class DriveService {
	private static readonly BASE_URL = 'https://www.googleapis.com/drive/v3/files';
  
	/**
     * Fetches files from Google Drive.
     * @param {string} token - The OAuth token.
     * @returns {Promise<any>} The data from the response.
     */
	static async fetchFiles(token: string) {
	  const response = await fetch(this.BASE_URL, {
		headers: {
		  'Authorization': 'Bearer ' + token
		}
	  });
  
	  const data = await response.json();
	  logger.log(LogType.INFO, 'Fetched file data', JSON.stringify(data));

	  return data;
	}
}

export default DriveService;