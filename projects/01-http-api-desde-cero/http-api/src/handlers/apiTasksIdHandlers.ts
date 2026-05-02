import { deleteTaskById, findTaskById, getTasks, updateTaskById, type Task } from "../common/utils";
import { errorHandler } from "./errorHandler";

const filePath = process.env.TASKS_FILE_PATH;

export const apiTasksIdGetHandler = async (req: Bun.BunRequest<"/api/tasks/:id">): Promise<Response> => {
	console.log("Received request for /api/tasks/:id with method GET at " + new Date().toISOString());
	try {
		const { params } = req;
		const tasks = await getTasks({ filePath });
		const task = findTaskById({ tasks, id: params.id });
		return Response.json(task, { status: 200 });
	} catch (error) {
		const customError = errorHandler(error instanceof Error ? error : new Error("Unknown error"));
		return Response.json(
			{ message: customError.message },
			{ status: customError.statusCode, headers: customError.headers },
		);
	}
};

export const apiTasksIdDeleteHandler = async (req: Bun.BunRequest<"/api/tasks/:id">): Promise<Response> => {
	console.log("Received request for /api/tasks/:id with method DELETE at " + new Date().toISOString());
	try {
		const { params } = req;
		const tasks = await getTasks({ filePath });
		await deleteTaskById({ filePath, tasks, id: params.id });
		return new Response(null, { status: 204 });
	} catch (error) {
		const customError = errorHandler(error instanceof Error ? error : new Error("Unknown error"));
		return Response.json(
			{ message: customError.message },
			{ status: customError.statusCode, headers: customError.headers },
		);
	}
};

export const apiTasksIdPatchHandler = async (req: Bun.BunRequest<"/api/tasks/:id">): Promise<Response> => {
	console.log("Received request for /api/tasks/:id with method PATCH at " + new Date().toISOString());
	try {
		const { params, headers } = req;
		if (headers.get("Content-Type") !== "application/json") throw new Error("Content-Type must be application/json");
		const tasks = await getTasks({ filePath });
		await updateTaskById({ filePath, tasks, id: params.id, body: (await req.json()) as Partial<Task> });
		return new Response(null, { status: 204 });
	} catch (error) {
		const customError = errorHandler(error instanceof Error ? error : new Error("Unknown error"));
		return Response.json(
			{ message: customError.message },
			{ status: customError.statusCode, headers: customError.headers },
		);
	}
};
