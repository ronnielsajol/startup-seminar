import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";
import { DATABASE_URL } from "../config/env";

const pool = new Pool({
	connectionString: DATABASE_URL,
	ssl: {
		rejectUnauthorized: false, // ✅ Allow self-signed cert
	},
});

export const db = drizzle(pool, { schema });
