import { db } from "@/database";
import { users } from "@/database/schema";
import { generateQRcode } from "@/lib/qrcode";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	const formData = await req.formData();
	const firstName = formData.get("firstName") as string;
	const lastName = formData.get("lastName") as string;
	const email = formData.get("email") as string;

	const alreadyRegistered = await db.select().from(users).where(eq(users.email, email));

	if (alreadyRegistered.length > 0) {
		return new Response(JSON.stringify({ error: "User already registered" }), { status: 400 });
	}

	const qrCode = await generateQRcode(firstName);

	const newUser = await db
		.insert(users)
		.values({
			firstName,
			lastName,
			email,
			qrCode,
		})
		.returning();

	return NextResponse.json({ user: newUser, status: 201, qrCode: qrCode });
}
