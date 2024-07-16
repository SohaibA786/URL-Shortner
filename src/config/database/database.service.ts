import { PrismaClient } from "@prisma/client";
import { OnModuleInit } from "@nestjs/common";

export class DatabaseService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
