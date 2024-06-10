The `logger.ts` file contains the implementation of the `LogService` and `Namespace` classes, which are used for logging messages with optional variables.

### LogService Class
The `LogService` class has the following properties:
- `file`: Represents the filename for logging.
- `emoji`: Represents the emoji associated with the log.

```typescript
class LogService {
	private file: string;
	private emoji: string;

	constructor(input: keyof typeof LoggingConfig.files) {
		// Constructor implementation
	}

	log(type: LogType, msg: string, variable?: string): void {
		// Log method implementation
	}
}
```

#### Constructor
The constructor of the `LogService` class takes an input parameter of type `keyof typeof LoggingConfig.files`. This parameter is used to access the logging configuration's emoji and filename.

#### log Method
The `log` method logs a message with an optional variable. It takes the following parameters:
- `type`: Represents the type of the log (e.g., ERROR, SUCCESS, INFO, WARNING).
- `msg`: Represents the message to be logged.
- `variable` (optional): Represents an optional variable to be logged.

### Namespace Class
The `Namespace` class is used to create a logging namespace. It has the following property:
- `namespace`: Represents the namespace for the log.

```typescript
class Namespace {
	private namespace: string;

	constructor(namespace: string) {
		// Constructor implementation
	}

	log(type: LogType, msg: string, variable?: string): void {
		// Log method implementation
	}
}
```

#### Constructor
The constructor of the `Namespace` class takes a `namespace` parameter of type `string`. This parameter is used to set the namespace for the log.

#### log Method
The `log` method in the `Namespace` class logs a message with an optional variable. It takes the same parameters as the `log` method in the `LogService` class.

## The Logger...

The `loggingConfig.ts` file is imported in the `logger.ts` file and contains the logging configuration. It exports an object that defines the logging files, their associated emojis, and other configuration options.

To use the `logger.ts` file and the logging configuration, follow these steps:
1. Import the `LogService`, `LogType`, and `Namespace` from the `logger.ts` file.
2. Create an instance of the `LogService` or `Namespace` class, providing the necessary parameters.
3. Use the `log` method of the created instance to log messages with optional variables.

To create new logging areas, you can:
- Add new entries to the `LoggingConfig.files` object in the `loggingConfig.ts` file, specifying the filename and emoji.
- Create new instances of the `LogService` or `Namespace` class with the appropriate parameters.

Remember to configure the logging options in the `LoggingConfig.content` property to control which parts of the log are included.

Please refer to the code and comments in the `logger.ts` and `loggingConfig.ts` files for more details on their usage and customization.
