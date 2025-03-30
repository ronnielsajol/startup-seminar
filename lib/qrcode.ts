import QRCode from "qrcode";
import { storage } from "@/lib/appwrite";
import { APPWRITE_BUCKET_ID } from "@/config/env";
import { ID } from "appwrite";

export async function generateQRcode(userId: string) {
	try {
		// Generate QR Code as a Data URL (base64 image)
		const qrDataUrl = await QRCode.toDataURL(userId, {
			width: 500,
			scale: 10,
		});

		// Convert Base64 to Blob
		const base64Data = qrDataUrl.split(";base64,")[1]; // Extract base64 string
		const qrBuffer = Buffer.from(base64Data, "base64"); // Convert to Buffer
		const qrBlob = new Blob([qrBuffer], { type: "image/png" }); // Convert to Blob

		const sanitizedUserId = userId.replace(/[^a-zA-Z0-9-_]/g, "_"); // Replace special characters
		const fileName = `qrcode_${sanitizedUserId}.png`;

		// Convert Blob to File
		const qrFile = new File([qrBlob], fileName, { type: "image/png" });

		// Upload to Appwrite Storage
		const response = await storage.createFile(APPWRITE_BUCKET_ID ?? "", ID.unique(), qrFile);

		// Get the file view URL
		const qrCodeUrl = storage.getFileView(APPWRITE_BUCKET_ID ?? "", response.$id);

		return qrCodeUrl;
	} catch (error) {
		console.error("Error generating QR code:", error);
		throw new Error("Failed to generate QR code");
	}
}
