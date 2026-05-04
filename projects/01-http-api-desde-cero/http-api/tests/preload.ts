import { mock } from "bun:test";
import { join } from "path";

process.env.TASKS_FILE_PATH = join(import.meta.dir, "fixtures", "tasks.json");

const writeMock = mock(async (): Promise<number> => 1);
Bun.write = writeMock;

mock.module("bun", () => ({
	...import.meta.require("bun"),
	write: writeMock,
}));
