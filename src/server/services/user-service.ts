import { RawUser } from "@/types/User";
import { DatabaseService } from "./db-service";

export class UserService {
  private static instance: UserService;

  private constructor(private readonly databaseService: DatabaseService) {}

  public static getInstance(databaseService: DatabaseService) {
    if (!UserService.instance) {
      UserService.instance = new UserService(databaseService);
    }

    return UserService.instance;
  }

  public async getUserByEmail(email: string) {
    const user = await this.databaseService.query<RawUser>("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    if (!user) throw new Error("User not found!");

    return user;
  }
}
