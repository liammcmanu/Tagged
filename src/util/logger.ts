import LoggingConfig from '../config/loggingConfig';

enum LogType {
	ERROR = 'error',
	SUCCESS = 'log',
	INFO = 'info',
	WARNING = 'warn'
}

class LogService {
	private file: string;
	private emoji: string;

	/**
	 * Constructor for the LogService class.
	 * @param {keyof typeof LoggingConfig.files} input - The key to access the logging configs emoji and filename.
	 */
	constructor(input: keyof typeof LoggingConfig.files) {
		const { file, emoji } = LoggingConfig.files[input];
		this.file = file;
		this.emoji = emoji;
	}

	/**
	 * Logs a message with optional variable.
	 * @param {LogType} type - The type of the log.
	 * @param {string} msg - The message to log.
	 * @param {string} [variable] - The optional variable to log.
	 */
	log(type: LogType, msg: string, variable?: string): void {
		if (!LoggingConfig.content) {
			return;
		}

		let contentLine = '';

		if (Array.isArray(LoggingConfig.content)) {
			if (LoggingConfig.content.includes('message')) {
				contentLine = msg;
			}
			if (LoggingConfig.content.includes('variable') && variable) {
				contentLine += ` - ${variable}`;
			}
		} else {
			contentLine = variable ? `${msg} - ${variable}` : msg;
		}

		console[type](`${new Date().toISOString()} ${type}: [${this.emoji} ${this.file}] - ${contentLine}`);
	}
}

class Namespace {
	private namespace: string;

	/**
	 * Constructor for the NamespaceLogService class.
	 * @param {string} namespace - The namespace for the log.
	 */
	constructor(namespace: string) {
		this.namespace = namespace;
	}

	/**
	 * Logs a message with optional variable.
	 * @param {LogType} type - The type of the log.
	 * @param {string} msg - The message to log.
	 * @param {string} [variable] - The optional variable to log.
	 */
	log(type: LogType, msg: string, variable?: string): void {
		if (!LoggingConfig.content) {
			return;
		}

		let contentLine = '';

		if (Array.isArray(LoggingConfig.content)) {
			if (LoggingConfig.content.includes('message')) {
				contentLine = msg;
			}
			if (LoggingConfig.content.includes('variable') && variable) {
				contentLine += ` - ${variable}`;
			}
		} else {
			contentLine = variable ? `${msg} - ${variable}` : msg;
		}

		console[type](`${new Date().toISOString()} ${type}: [${this.namespace}] - ${contentLine}`);
	}
}

export {LogService, LogType, Namespace};
