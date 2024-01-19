import { Connection, RowDataPacket, createConnection } from "mysql2/promise";

export class DatabaseService {
  private static instance: DatabaseService;

  private conn: Connection | null = null;

  private constructor() {}

  public static async getInstance() {
    if (!DatabaseService.instance) {
      DatabaseService.instance = new DatabaseService();
    }

    return DatabaseService.instance;
  }

  private async init() {
    this.conn = await createConnection({
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT!),
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });
  }

  public async query<T>(sql: string, values: Array<string | number>): Promise<T> {
    await this.init();

    const [result] = (await this.conn?.execute<RowDataPacket[]>(sql, values)) as RowDataPacket[];

    this.conn?.destroy();

    return result[0] as T;
  }
}
