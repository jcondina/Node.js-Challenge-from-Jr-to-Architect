import { file as readFile, write as writeFile } from "bun";

const DEFAULT_PAGE_SIZE = 5;
const validSearchParams = ["priority", "state", "page", "pageSize"] as const;
const validStates = ["to-do", "in-progress", "completed", "archived"] as const;
const validPriorities = ["low", "medium", "high"] as const;

export interface Task {
	id: string;
	title: string;
	priority: (typeof validPriorities)[number];
	state: (typeof validStates)[number];
	description: string;
}

interface PaginatedTasks {
	tasks: Task[];
	page: number;
	totalPages: number;
	totalTasks: number;
}

// This may contain lots of data, but since we are not using a database, we need to read all tasks and filter
// them in memory. In a real application, you would want to implement pagination and filtering at the database
// level to avoid performance issues.
// Maybe using a file stream approach would be better for large datasets, but for simplicity, we will read all
// tasks into memory and filter them there.
export const getTasks = async ({ filePath }: { filePath: string | undefined }): Promise<Task[]> => {
	try {
		if (!filePath) throw new Error("Tasks file path is not defined");
		const data = await readFile(filePath, { type: "application/json" }).json();
		return data.tasks as Task[];
	} catch (error) {
		if (error instanceof Error && error.message === "Tasks file path is not defined")
			throw new Error("Tasks file path is not defined");
		throw new Error("Error reading tasks");
	}
};

export const findTaskById = ({ tasks, id }: { tasks: Task[]; id: string }): Task => {
	const task = tasks.find((t) => t.id === id);
	if (!task) throw new Error("Task not found");
	return task;
};

export const deleteTaskById = async ({
	filePath,
	tasks,
	id,
}: {
	filePath: string | undefined;
	tasks: Task[];
	id: string;
}): Promise<void> => {
	try {
		if (!filePath) throw new Error("Tasks file path is not defined");
		const task = findTaskById({ tasks, id });
		await writeFile(filePath, JSON.stringify({ tasks: tasks.filter((t) => t.id !== task.id) }));
	} catch (error) {
		if (error instanceof Error && error.message === "Task not found") throw new Error("Task not found");
		throw new Error("Error deleting task");
	}
};

export const updateTaskById = async ({
	filePath,
	tasks,
	id,
	body,
}: {
	filePath: string | undefined;
	tasks: Task[];
	id: string;
	body: Partial<Task>;
}): Promise<void> => {
	try {
		if (!filePath) throw new Error("Tasks file path is not defined");
		const task = findTaskById({ tasks, id });
		if (Object.keys(body).length === 0) throw new Error("Invalid task data");

		if (
			Object.keys(body).some((key) => !Object.keys(task).includes(key)) ||
			Object.keys(body).includes("id") ||
			Object.values(body).some((value) => value === undefined) ||
			Object.values(body).some((value) => value === null) ||
			Object.values(body).some((value) => value === "")
		)
			throw new Error("Invalid task data");
		const updatedTask = Object.assign(task, body);
		await writeFile(filePath, JSON.stringify({ tasks: tasks.map((t) => (t.id === task.id ? updatedTask : t)) }));
	} catch (error) {
		if (error instanceof Error && error.message === "Task not found") throw new Error("Task not found");
		if (error instanceof Error && error.message === "Invalid task data") throw new Error("Invalid task data");
		throw new Error("Error updating task");
	}
};

export const getPaginatedTasksWithFilters = async ({
	filePath,
	searchParams,
}: {
	filePath: string | undefined;
	searchParams: URLSearchParams;
}): Promise<PaginatedTasks> => {
	if (!filePath) throw new Error("Tasks file path is not defined");
	const tasks = await getTasks({ filePath });
	for (const param of searchParams.keys()) {
		if (!validSearchParams.includes(param as (typeof validSearchParams)[number]))
			throw new Error(`Invalid query parameter: ${param}`);
	}
	const priority = searchParams.get("priority") as (typeof validPriorities)[number];
	const state = searchParams.get("state") as (typeof validStates)[number];
	const page = parseInt(searchParams.get("page") || "1");
	const pageSize = parseInt(searchParams.get("pageSize") || DEFAULT_PAGE_SIZE.toString());
	if (isNaN(pageSize) || pageSize < 1) throw new Error("Invalid page size");
	if (priority && !validPriorities.includes(priority)) throw new Error("Invalid priority value");
	if (state && !validStates.includes(state)) throw new Error("Invalid state value");
	const hasFilters = priority || state || page !== 1 || pageSize !== DEFAULT_PAGE_SIZE;
	if (!hasFilters)
		return {
			tasks: tasks.slice(0, pageSize),
			page: 1,
			totalPages: Math.ceil(tasks.length / pageSize),
			totalTasks: tasks.length,
		};
	if (isNaN(page) || page < 1 || page > Math.ceil(tasks.length / pageSize)) throw new Error("Invalid page number");
	let filteredTasks = tasks;
	if (priority) filteredTasks = filteredTasks.filter((t) => t.priority === priority);
	if (state) filteredTasks = filteredTasks.filter((t) => t.state === state);
	return {
		tasks: filteredTasks.slice((page - 1) * pageSize, page * pageSize),
		page,
		totalPages: Math.ceil(filteredTasks.length / pageSize),
		totalTasks: filteredTasks.length,
	};
};

export const createNewTask = async ({
	filePath,
	body,
}: {
	filePath: string | undefined;
	body: Task;
}): Promise<string> => {
	if (!body || typeof body !== "object" || Object.keys(body).length === 0) throw new Error("Invalid request body");
	const parsedBody = body;
	if (
		!parsedBody.title ||
		!parsedBody.description ||
		!parsedBody.priority ||
		!parsedBody.state ||
		parsedBody.id !== undefined ||
		Object.keys(parsedBody).some((key) => !["title", "description", "priority", "state"].includes(key)) ||
		Object.values(parsedBody).some((value) => value === undefined) ||
		Object.values(parsedBody).some((value) => value === null) ||
		Object.values(parsedBody).some((value) => typeof value !== "string") ||
		Object.values(parsedBody).some((value) => value === "")
	)
		throw new Error("Invalid task data");
	if (!validPriorities.includes(parsedBody.priority)) throw new Error("Invalid priority value");
	if (!validStates.includes(parsedBody.state)) throw new Error("Invalid state value");
	if (!filePath) throw new Error("Tasks file path is not defined");
	const tasks = await getTasks({ filePath });
	const newTask: Task = {
		id: crypto.randomUUID(),
		title: parsedBody.title,
		description: parsedBody.description,
		priority: parsedBody.priority,
		state: parsedBody.state,
	};
	await writeFile(filePath, JSON.stringify({ tasks: [...tasks, newTask] }));
	return newTask.id;
};
