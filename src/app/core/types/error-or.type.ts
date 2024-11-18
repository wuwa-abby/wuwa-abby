export class ErrorOr<T> {
	error?: boolean;
	message?: string;
	value?: T;
	status?: number;

	constructor(value: T) {
		this.value = value;
	}

	static error<T>(message: string, status?: number): ErrorOr<T> {
		return {
			error: true,
			message: message,
			status: status,
		};
	}

	static value<T>(value: T): ErrorOr<T> {
		return {
			value,
		};
	}

	static isError<T>(errorOr: ErrorOr<T>): errorOr is ErrorOr<T> {
		return errorOr.error !== undefined;
	}
}

export const isError = ErrorOr.isError;
