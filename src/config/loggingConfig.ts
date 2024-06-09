const LoggingConfig: ILoggingConfigClass = {
	content: ['message'],
	files: {
		authService: {
			file: 'src/service/authService.ts',
			emoji: '🔑🔓☁️',
		},
		driveService: {
			file: 'src/service/driveService.ts',
			emoji: '🚗☁️',
		},

		authFrontend: {
			file: 'src/components/auth/Auth.tsx',
			emoji: '🔑🔓🖥️',
		},
		appFrontend: {
			file: 'src/components/App.tsx',
			emoji: '🖥️',
		},

		background: {
			file: 'src/background.ts',
			emoji: '🤖🌃🔮',
		},
	},
};

interface FileInterface {
	file: string;
	emoji: string;
}

interface ILoggingConfigClass {
	content: boolean | ('message' | 'variable')[];
	files: {
		[key: string]: FileInterface;
	};
}

export default Object.freeze(LoggingConfig);
