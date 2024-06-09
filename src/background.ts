// With background scripts you can communicate with sidepanel
// and contentScript files.
// For more information on background script,
// See https://developer.chrome.com/extensions/background_pages
import {LogService, LogType} from './util/logger';

const logger = new LogService('background');

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.redirect) {
		logger.log(LogType.INFO, 'redirecting to', request.redirect);
        chrome.tabs.create({url: request.redirect});
    }
});