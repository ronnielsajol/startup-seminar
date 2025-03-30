import { db } from "@/database";
import { users } from "@/database/schema";
import { NextResponse } from "next/server";

export async function GET() {
	const allUsers = await db.select().from(users);
	return NextResponse.json({ users: allUsers });
}
