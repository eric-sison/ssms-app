import { UserService } from "./user-service";
import { Credentials, User } from "@/types/User";
import { cookies } from "next/headers";
import * as argon2 from "argon2";
import * as crypto from "crypto";

export class AuthenticationService {
  private static instance: AuthenticationService;

  private readonly key = process.env.ENCRYPTION_KEY as string;

  private readonly iv = process.env.ENCRYPTION_IV as string;

  private readonly algorithm = process.env.ENCRYPTION_ALGORITHM as string;

  private constructor(private readonly userService: UserService) {}

  public static getInstance(userService: UserService) {
    if (!AuthenticationService.instance) {
      AuthenticationService.instance = new AuthenticationService(userService);
    }

    return AuthenticationService.instance;
  }

  async validateUser(credentials: Credentials) {
    try {
      const { user_id, email, password } = await this.userService.getUserByEmail(credentials.email);

      await this._verifyPassword(password, credentials.password);

      const user = {
        userId: user_id,
        email,
      };

      this._setCookie(user);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  private async _verifyPassword(hashed: string, plain: string) {
    const isValid = await argon2.verify(hashed, plain);

    if (!isValid) throw new Error("Invalid password");
  }

  private _setCookie(user: User) {
    const encryptedValue = this._encryptToken(user);

    cookies().set({
      priority: "high",
      name: "refresh_token",
      value: encryptedValue,
      httpOnly: true,
      path: "/",
      sameSite: "strict",
      maxAge: 86400,
    });
  }

  private _encryptToken(user: User) {
    const cipher = crypto.createCipheriv(this.algorithm, this.key, this.iv);

    let encrypted = cipher.update(JSON.stringify(user), "utf8", "hex");

    encrypted += cipher.final("hex");

    return encrypted;
  }
}
