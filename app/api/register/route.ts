import { supabase } from "@/database/index";
import { generateQRcode } from "@/lib/qrcode";
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
		const { data: existingUser, error: checkError } = await supabase
			.from("users")
			.select("email")
			.eq("email", email)
			.single();

		if (checkError && checkError.code !== "PGRST116") {
			console.error("Error checking user existence:", checkError);
			return NextResponse.json({ error: "Database error" }, { status: 500 });
		}

		if (existingUser) {
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

		// Insert new user into Supabase
		const { data: newUser, error: insertError } = await supabase
			.from("users")
			.insert({ firstName, lastName, email, qr_code: qrCode })
			.select()
			.single();

		if (insertError) {
			console.error("Error inserting user:", insertError);
			return NextResponse.json({ error: "Database insertion failed" }, { status: 500 });
		}

		return NextResponse.json({ user: newUser, qrCode }, { status: 201 });
	} catch (error) {
		console.error("Error registering user:", error);
		return NextResponse.json({ error: "Internal server error" }, { status: 500 });
	}
}
