import "./preload";
import { describe, expect, test, spyOn, beforeEach, mock } from "bun:test";
import {
	apiTasksIdDeleteHandler,
	apiTasksIdGetHandler,
	apiTasksIdPatchHandler,
} from "../src/handlers/apiTasksIdHandlers";
import * as utils from "../src/common/utils";

describe("/api/tasks/:id route tests", () => {
	test("GET /api/tasks/:id - should fail if there file does not exist", async () => {
		spyOn(utils, "getTasks").mockRejectedValueOnce(new Error("Error reading tasks"));
		const response = await apiTasksIdGetHandler({ params: { id: "1" } } as Bun.BunRequest<"/api/tasks/:id">);
		expect(response.status).toBe(500);
		const error = await response.json();
		expect(error).toEqual({ message: "Error reading tasks" });
	});

	test("GET /api/tasks/:id - should fail if the file path is not defined", async () => {
		spyOn(utils, "getTasks").mockRejectedValueOnce(Error("Tasks file path is not defined"));
		const response = await apiTasksIdGetHandler({ params: { id: "1" } } as Bun.BunRequest<"/api/tasks/:id">);
		expect(response.status).toBe(500);
		const error = await response.json();
		expect(error).toEqual({ message: "Tasks file path is not defined" });
	});

	test("GET /api/tasks/:id - should return the task with the specified ID", async () => {
		const response = await apiTasksIdGetHandler({ params: { id: "1" } } as Bun.BunRequest<"/api/tasks/:id">);
		expect(response.status).toBe(200);
		const task = await response.json();
		expect(task).toEqual({
			id: "1",
			title: "Task 1",
			description: "Description 1",
			priority: "low",
			state: "to-do",
		});
	});

	test("GET /api/tasks/:id - should return 404 if task not found", async () => {
		const response = await apiTasksIdGetHandler({ params: { id: "999" } } as Bun.BunRequest<"/api/tasks/:id">);
		expect(response.status).toBe(404);
		const error = await response.json();
		expect(error).toEqual({ message: "Task not found" });
	});

	test("DELETE /api/tasks/:id - should delete the task with the specified ID", async () => {
		const response = await apiTasksIdDeleteHandler({ params: { id: "1" } } as Bun.BunRequest<"/api/tasks/:id">);
		expect(response.status).toBe(204);
	});

	test("DELETE /api/tasks/:id - should return 404 if task not found", async () => {
		const response = await apiTasksIdDeleteHandler({ params: { id: "999" } } as Bun.BunRequest<"/api/tasks/:id">);
		expect(response.status).toBe(404);
		const error = await response.json();
		expect(error).toEqual({ message: "Task not found" });
	});

	test("DELETE /api/tasks/:id - should return 500 if there is an error", async () => {
		spyOn(utils, "deleteTaskById").mockImplementation(async (): Promise<never> => {
			throw new Error("Error deleting task");
		});
		const response = await apiTasksIdDeleteHandler({ params: { id: "1" } } as Bun.BunRequest<"/api/tasks/:id">);
		expect(response.status).toBe(500);
		const error = await response.json();
		expect(error).toEqual({ message: "Error deleting task" });
	});

	test("PATCH /api/tasks/:id - should update the task with the specified ID", async () => {
		const mockRequest = {
			params: { id: "1" },
			headers: { get: (header: string) => (header === "Content-Type" ? "application/json" : null) },
			json: async () => ({ state: "completed" }),
		} as Bun.BunRequest<"/api/tasks/:id">;

		const response = await apiTasksIdPatchHandler(mockRequest);
		expect(response.status).toBe(204);
	});

	test("PATCH /api/tasks/:id - should return 404 if task not found", async () => {
		const mockRequest = {
			params: { id: "999" },
			headers: { get: (header: string) => (header === "Content-Type" ? "application/json" : null) },
			json: async () => ({ state: "completed" }),
		} as Bun.BunRequest<"/api/tasks/:id">;
		const response = await apiTasksIdPatchHandler(mockRequest);
		expect(response.status).toBe(404);
		const error = await response.json();
		expect(error).toEqual({ message: "Task not found" });
	});

	test("PATCH /api/tasks/:id - should return 400 if Content-Type is not application/json", async () => {
		const mockRequest = {
			params: { id: "2" },
			headers: { get: (header: string) => (header === "Content-Type" ? "text/plain" : null) },
			json: async () => ({ state: "completed" }),
		} as Bun.BunRequest<"/api/tasks/:id">;
		const response = await apiTasksIdPatchHandler(mockRequest);
		expect(response.status).toBe(400);
		const error = await response.json();
		expect(error).toEqual({ message: "Content-Type must be application/json" });
	});

	test("PATCH /api/tasks/:id - should return 500 if there is an error", async () => {
		spyOn(utils, "updateTaskById").mockImplementationOnce(async (): Promise<never> => {
			throw new Error("Error updating task");
		});
		const mockRequest = {
			params: { id: "2" },
			headers: { get: (header: string) => (header === "Content-Type" ? "application/json" : null) },
			json: async () => ({ state: "completed" }),
		} as Bun.BunRequest<"/api/tasks/:id">;
		const response = await apiTasksIdPatchHandler(mockRequest);
		expect(response.status).toBe(500);
		const error = await response.json();
		expect(error).toEqual({ message: "Error updating task" });
	});

	test("PATCH /api/tasks/:id - should return 400 if request body is invalid", async () => {
		const mockRequest = {
			params: { id: "2" },
			headers: { get: (header: string) => (header === "Content-Type" ? "application/json" : null) },
			json: async () => ({ invalidField: "value" }),
		} as Bun.BunRequest<"/api/tasks/:id">;
		const response = await apiTasksIdPatchHandler(mockRequest);
		expect(response.status).toBe(400);
		const error = await response.json();
		expect(error).toEqual({ message: "Invalid task data" });
	});

	test("PATCH /api/tasks/:id - should return 400 if request body is empty", async () => {
		const mockRequest = {
			params: { id: "2" },
			headers: { get: (header: string) => (header === "Content-Type" ? "application/json" : null) },
			json: async () => ({}),
		} as Bun.BunRequest<"/api/tasks/:id">;
		const response = await apiTasksIdPatchHandler(mockRequest);
		expect(response.status).toBe(400);
		const error = await response.json();
		expect(error).toEqual({ message: "Invalid task data" });
	});
});
