export const errorHandler = (
	error: Error,
): { statusCode: number; message: string; headers?: Record<string, string> } => {
	switch (error.message) {
		case "Task not found":
			return { statusCode: 404, message: error.message };
		case "Tasks file path is not defined":
			return { statusCode: 500, message: error.message };
		case "Invalid task data":
			return { statusCode: 400, message: error.message };
		case "Content-Type must be application/json":
			return {
				statusCode: 400,
				message: error.message,
				headers: { "Accept-Patch": "application/json" },
			};
		case "Error reading tasks":
			return { statusCode: 500, message: error.message };
		case "Error deleting task":
			return { statusCode: 500, message: error.message };
		case "Error updating task":
			return { statusCode: 500, message: error.message };
		case "Error creating task":
			return { statusCode: 500, message: error.message };
		case "Invalid priority value":
			return { statusCode: 400, message: error.message };
		case "Invalid state value":
			return { statusCode: 400, message: error.message };
		case "Invalid page number":
			return { statusCode: 400, message: error.message };
		case "Invalid request body":
			return { statusCode: 400, message: error.message };
		case "Invalid page size":
			return { statusCode: 400, message: error.message };
		case /^Invalid query parameter: (.+)$/.test(error.message) ? error.message : "":
			return { statusCode: 400, message: error.message };
		default:
			return { statusCode: 500, message: "Internal Server Error" };
	}
};
