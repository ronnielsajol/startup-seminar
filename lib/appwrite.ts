import { Client, Storage } from "appwrite";
import { APPWRITE_PROJECT_ID } from "@/config/env";

const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject(APPWRITE_PROJECT_ID ?? "");

export const storage = new Storage(client);
