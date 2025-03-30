import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
// import * as schema from "./schema";
import { DATABASE_URL } from "../config/env";

const client = postgres(DATABASE_URL ?? "", { prepare: false });
export const db = drizzle({ client });
