import "./preload";
import { describe, expect, test, spyOn } from "bun:test";
import { apiTasksGetHandler, apiTasksPostHandler } from "../src/handlers/apiTasksHandlers";
import * as utils from "../src/common/utils";

const url = `http://localhost/api/tasks`;

describe("/api/tasks route tests", () => {
	test("GET /api/tasks - should return 500 if there is an error", async () => {
		spyOn(utils, "getPaginatedTasksWithFilters").mockImplementationOnce(async (): Promise<never> => {
			throw new Error("Error reading tasks");
		});
		const response = await apiTasksGetHandler({ url } as Bun.BunRequest<"/api/tasks">);

		expect(response.status).toBe(500);
		const error = await response.json();
		expect(error).toEqual({ message: "Error reading tasks" });
	});

	test("GET /api/tasks - should return a paginated list of tasks", async () => {
		const response = await apiTasksGetHandler({ url } as Bun.BunRequest<"/api/tasks">);
		expect(response.status).toBe(200);
		const data = await response.json();
		expect(data).toEqual({
			tasks: [
				{ id: "1", title: "Task 1", description: "Description 1", priority: "low", state: "to-do" },
				{ id: "2", title: "Task 2", description: "Description 2", priority: "medium", state: "in-progress" },
				{ id: "3", title: "Task 3", description: "Description 3", priority: "high", state: "completed" },
			],
			page: 1,
			totalPages: 1,
			totalTasks: 3,
		});
	});

	test("GET /api/tasks - should return a paginated list of tasks based on query parameters", async () => {
		const response = await apiTasksGetHandler({
			url: `${url}?priority=low&state=to-do&page=1&pageSize=2`,
		} as Bun.BunRequest<"/api/tasks">);
		expect(response.status).toBe(200);
		const data = await response.json();
		expect(data).toEqual({
			tasks: [{ id: "1", title: "Task 1", description: "Description 1", priority: "low", state: "to-do" }],
			page: 1,
			totalPages: 1,
			totalTasks: 1,
		});
	});

	test("GET /api/tasks - should return an empty list if no tasks match the query parameters", async () => {
		const response = await apiTasksGetHandler({
			url: `${url}?priority=low&state=completed&page=1&pageSize=2`,
		} as Bun.BunRequest<"/api/tasks">);
		expect(response.status).toBe(200);
		const data = await response.json();
		expect(data).toEqual({
			tasks: [],
			page: 1,
			totalPages: 0,
			totalTasks: 0,
		});
	});

	test("GET /api/tasks - should return 400 if query parameters are invalid", async () => {
		const response = await apiTasksGetHandler({
			url: `${url}?invalidParam=value&page=1`,
		} as Bun.BunRequest<"/api/tasks">);
		expect(response.status).toBe(400);
		const error = await response.json();
		expect(error).toEqual({ message: "Invalid query parameter: invalidParam" });
	});

	test("GET /api/tasks - should return 400 if query priority value is invalid", async () => {
		const response = await apiTasksGetHandler({
			url: `${url}?priority=invalid&page=1`,
		} as Bun.BunRequest<"/api/tasks">);
		expect(response.status).toBe(400);
		const error = await response.json();
		expect(error).toEqual({ message: "Invalid priority value" });
	});

	test("GET /api/tasks - should return 400 if query state value is invalid", async () => {
		const response = await apiTasksGetHandler({
			url: `${url}?state=invalid&page=1`,
		} as Bun.BunRequest<"/api/tasks">);
		expect(response.status).toBe(400);
		const error = await response.json();
		expect(error).toEqual({ message: "Invalid state value" });
	});

	test("GET /api/tasks - should return 400 if page number value is invalid", async () => {
		const response = await apiTasksGetHandler({
			url: `${url}?page=-1`,
		} as Bun.BunRequest<"/api/tasks">);
		expect(response.status).toBe(400);
		const error = await response.json();
		expect(error).toEqual({ message: "Invalid page number" });
	});

	test("GET /api/tasks - should return 400 if page size value is invalid", async () => {
		const response = await apiTasksGetHandler({
			url: `${url}?pageSize=-1`,
		} as Bun.BunRequest<"/api/tasks">);
		expect(response.status).toBe(400);
		const error = await response.json();
		expect(error).toEqual({ message: "Invalid page size" });
	});

	test("POST /api/tasks - should create a new task and return its ID", async () => {
		const newTask = {
			title: "New Task",
			description: "New Description",
			priority: "medium",
			state: "to-do",
		};
		const response = await apiTasksPostHandler({
			url,
			headers: { get: (header: string) => (header === "Content-Type" ? "application/json" : null) },
			json: async () => newTask,
		} as Bun.BunRequest<"/api/tasks">);
		expect(response.status).toBe(201);
		const data = await response.json();
		expect(data).toHaveProperty("id");
	});

	test("POST /api/tasks - should return 400 if content type is not application/json", async () => {
		const response = await apiTasksPostHandler({
			url,
			headers: { get: (header: string) => (header === "Content-Type" ? "text/plain" : null) },
		} as Bun.BunRequest<"/api/tasks">);
		expect(response.status).toBe(400);
		const error = await response.json();
		expect(error).toEqual({ message: "Content-Type must be application/json" });
	});

	test("POST /api/tasks - should return 400 if request body is invalid", async () => {
		const response = await apiTasksPostHandler({
			url,
			headers: { get: (header: string) => (header === "Content-Type" ? "application/json" : null) },
			json: async () => ({ invalidField: "value" }),
		} as Bun.BunRequest<"/api/tasks">);
		expect(response.status).toBe(400);
		const error = await response.json();
		expect(error).toEqual({ message: "Invalid task data" });
	});

	test("POST /api/tasks - should return 400 if priority value is invalid", async () => {
		const newTask = {
			title: "New Task",
			description: "New Description",
			priority: "invalid",
			state: "to-do",
		};
		const response = await apiTasksPostHandler({
			url,
			headers: { get: (header: string) => (header === "Content-Type" ? "application/json" : null) },
			json: async () => newTask,
		} as Bun.BunRequest<"/api/tasks">);
		expect(response.status).toBe(400);
		const error = await response.json();
		expect(error).toEqual({ message: "Invalid priority value" });
	});

	test("POST /api/tasks - should return 400 if state value is invalid", async () => {
		const newTask = {
			title: "New Task",
			description: "New Description",
			priority: "medium",
			state: "invalid",
		};
		const response = await apiTasksPostHandler({
			url,
			headers: { get: (header: string) => (header === "Content-Type" ? "application/json" : null) },
			json: async () => newTask,
		} as Bun.BunRequest<"/api/tasks">);
		expect(response.status).toBe(400);
		const error = await response.json();
		expect(error).toEqual({ message: "Invalid state value" });
	});

	test("POST /api/tasks - should return 400 if an invalid request body is sent", async () => {
		const response = await apiTasksPostHandler({
			url,
			headers: { get: (header: string) => (header === "Content-Type" ? "application/json" : null) },
			json: async () => ({}),
		} as Bun.BunRequest<"/api/tasks">);
		expect(response.status).toBe(400);
		const error = await response.json();
		expect(error).toEqual({ message: "Invalid request body" });
	});
});
