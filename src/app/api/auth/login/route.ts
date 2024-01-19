import { AuthenticationService } from "@/server/services/auth-service";
import { DatabaseService } from "@/server/services/db-service";
import { UserService } from "@/server/services/user-service";
import { Credentials } from "@/types/User";
import { NextResponse } from "next/server";

const AuthenticationSuccessful = {
  message: "User successfully authenticated!",
  status: 201,
  success: true,
};

const AuthenticationFailed = {
  message: "Invalid email and/or password!",
  status: 401,
  success: false,
};

export async function POST(req: Request) {
  const credentials = (await req.json()) as Credentials;
  const databaseService = await DatabaseService.getInstance();
  const userService = UserService.getInstance(databaseService);
  const authService = AuthenticationService.getInstance(userService);

  try {
    await authService.validateUser(credentials);
    return NextResponse.json(AuthenticationSuccessful, { status: 201 });
  } catch (error) {
    return NextResponse.json(AuthenticationFailed, { status: 401 });
  }
}
