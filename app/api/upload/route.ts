import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { join } from "path";
import { mkdir } from "fs/promises";

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

    // Create uploads directory if it doesn't exist
    const uploadDir = join(process.cwd(), "public", "uploads");
    await mkdir(uploadDir, { recursive: true });

    // Convert File to Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Save file to public/uploads directory
    const fileName = `${Date.now()}-${name}`;
    const filePath = join(uploadDir, fileName);
    await writeFile(filePath, buffer);

    // Return the public URL
    const url = `/uploads/${fileName}`;

    console.log("Upload successful:", url);

    return NextResponse.json({ url }, { status: 200 });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
