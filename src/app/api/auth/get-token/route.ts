import { User } from "@/types/User";
import * as crypto from "crypto";
import * as jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const key = process.env.ENCRYPTION_KEY as string;

    const iv = process.env.ENCRYPTION_IV as string;

    const algorithm = process.env.ENCRYPTION_ALGORITHM as string;

    const refreshToken = req.headers.get("Cookie")?.split("=")[1] as string;

    const decipher = crypto.createDecipheriv(algorithm, key, iv);

    let decrypted = decipher.update(refreshToken, "hex", "utf8");

    decrypted += decipher.final("utf8");

    const user = JSON.parse(decrypted) as User;

    const token = jwt.sign(user, process.env.JWT_SECRET as string, { expiresIn: "1d" });

    return Response.json({ token });
  } catch (error) {
    return NextResponse.json(
      { message: "Unauthorized!", status: 401, success: false },
      { status: 401 }
    );
  }
}
