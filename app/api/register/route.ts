import { db } from "@/database";
import { users } from "@/database/schema";
import { generateQRcode } from "@/lib/qrcode";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const formData = await req.formData();
		const firstName = formData.get("firstName") as string;
		const lastName = formData.get("lastName") as string;
		const email = formData.get("email") as string;

		// Validate required fields
		if (!firstName || !lastName || !email) {
			return NextResponse.json({ error: "All fields are required" }, { status: 400 });
		}

		// Check if user is already registered
		const alreadyRegistered = await db.select().from(users).where(eq(users.email, email));

		if (alreadyRegistered.length > 0) {
			return NextResponse.json({ error: "User already registered" }, { status: 400 });
		}

		// Generate QR Code
		let qrCode;
		try {
			qrCode = await generateQRcode(firstName);
		} catch (error) {
			console.error("QR Code generation failed:", error);
			return NextResponse.json({ error: "Failed to generate QR code" }, { status: 500 });
		}

		// Insert new user into the database
		const newUser = await db.insert(users).values({ firstName, lastName, email, qrCode }).returning();

		return NextResponse.json({ user: newUser, qrCode }, { status: 201 });
	} catch (error) {
		console.error("Error registering user:", error);
		return NextResponse.json({ error: "Internal server error" }, { status: 500 });
	}
}
