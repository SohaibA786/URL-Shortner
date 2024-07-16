import { DatabaseService } from "src/config/database/database.service";
import { Prisma } from "@prisma/client";
export declare class CompressUrlsService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    compress(url: string): Promise<{
        id: number;
        url: string;
        compressedUrl: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Prisma.PrismaPromise<{
        id: number;
        url: string;
        compressedUrl: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    redirect(compressedUrl: string): Promise<string>;
    delete(compressedUrl: string): Promise<{
        id: number;
        url: string;
        compressedUrl: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
