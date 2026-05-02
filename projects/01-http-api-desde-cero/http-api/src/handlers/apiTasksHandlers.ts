import { createNewTask, getPaginatedTasksWithFilters, type Task } from "../common/utils";
import { errorHandler } from "./errorHandler";

const filePath = process.env.TASKS_FILE_PATH;

export const apiTasksGetHandler = async (req: Bun.BunRequest<"/api/tasks">): Promise<Response> => {
	const { searchParams } = new URL(req.url);
	console.log(
		"Received request for /api/tasks with method GET using the following query parameters: " +
			searchParams.toString() +
			" at " +
			new Date().toISOString(),
	);
	try {
		const paginatedTasks = await getPaginatedTasksWithFilters({ filePath, searchParams });
		return Response.json(paginatedTasks, { status: 200 });
	} catch (error) {
		const customError = errorHandler(error instanceof Error ? error : new Error("Unknown error"));
		return Response.json(
			{ message: customError.message },
			{ status: customError.statusCode, headers: customError.headers },
		);
	}
};

export const apiTasksPostHandler = async (req: Bun.BunRequest<"/api/tasks">): Promise<Response> => {
	console.log("Received request for /api/tasks with method POST at " + new Date().toISOString());
	try {
		if (req.headers.get("Content-Type") !== "application/json")
			throw new Error("Content-Type must be application/json");
		const body = (await req.json()) as Task;
		const newTaskId = await createNewTask({ filePath, body });
		return Response.json({ id: newTaskId }, { status: 201 });
	} catch (error) {
		const customError = errorHandler(error instanceof Error ? error : new Error("Unknown error"));
		return Response.json(
			{ message: customError.message },
			{ status: customError.statusCode, headers: customError.headers },
		);
	}
};
