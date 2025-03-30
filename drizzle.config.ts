import { DATABASE_URL } from "./config/env";
import { defineConfig } from "drizzle-kit";

if (!DATABASE_URL) {
	throw new Error("DATABASE_URL is not defined in the environment variables.");
}

export default defineConfig({
	schema: "./database/schema.ts",
	out: "./migrations",
	dialect: "postgresql",
	dbCredentials: {
		url: DATABASE_URL,
	},
});
