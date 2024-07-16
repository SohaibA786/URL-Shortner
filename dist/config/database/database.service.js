"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseService = void 0;
const client_1 = require("@prisma/client");
class DatabaseService extends client_1.PrismaClient {
    async onModuleInit() {
        await this.$connect();
    }
}
exports.DatabaseService = DatabaseService;
//# sourceMappingURL=database.service.js.map