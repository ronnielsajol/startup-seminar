import { config } from "dotenv";
config({ path: ".env" });

export const { DATABASE_URL, APPWRITE_BUCKET_ID, APPWRITE_PROJECT_ID } = process.env;
