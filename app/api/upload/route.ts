import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File | null;
        const name = formData.get("name") as string | null;
        const fileType = formData.get("fileType") as string | null;

        console.log("Received file:", file);
        console.log("File name:", name);
        console.log("File type:", fileType);

        if (!file || !name || !fileType) {
            console.error("Missing file data:", { file, name, fileType });
            return NextResponse.json({ error: "Missing file data" }, { status: 400 });
        }

        console.log("Uploading file:", name);

        // Convert File to Buffer
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // Upload to Vercel Blob
        const blob = await put(name, buffer, {
            access: "public", // Change to "private" if needed
            contentType: fileType,
        });

        console.log("Upload successful:", blob.url);

        return NextResponse.json({ url: blob.url }, { status: 200 });
    } catch (error) {
        console.error("Upload error:", error);
        return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    }
}