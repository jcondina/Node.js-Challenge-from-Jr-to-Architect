import { serve as createServer } from "bun";
import { apiTasksGetHandler, apiTasksPostHandler } from "./src/handlers/apiTasksHandlers.ts";
import {
	apiTasksIdDeleteHandler,
	apiTasksIdGetHandler,
	apiTasksIdPatchHandler,
} from "./src/handlers/apiTasksIdHandlers.ts";

const server = createServer({
	port: 3000,
	routes: {
		"/": new Response("Bun is better than Node.js!"),
		"/api/health": new Response("OK"),
		"/api/tasks/:id": {
			GET: async (req: Bun.BunRequest<"/api/tasks/:id">) => apiTasksIdGetHandler(req),
			DELETE: async (req: Bun.BunRequest<"/api/tasks/:id">) => apiTasksIdDeleteHandler(req),
			PATCH: async (req: Bun.BunRequest<"/api/tasks/:id">) => apiTasksIdPatchHandler(req),
		},
		"/api/tasks": {
			GET: async (req: Bun.BunRequest<"/api/tasks">) => apiTasksGetHandler(req),
			POST: async (req: Bun.BunRequest<"/api/tasks">) => apiTasksPostHandler(req),
		},
	},
});

console.log(`Bun server listening on ${server.url}`);
