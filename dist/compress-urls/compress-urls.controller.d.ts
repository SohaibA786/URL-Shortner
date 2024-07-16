import { CompressUrlsService } from "./compress-urls.service";
export declare class CompressUrlsController {
    private readonly compressUrlsService;
    constructor(compressUrlsService: CompressUrlsService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        url: string;
        compressedUrl: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    compress(body: {
        url: string;
    }): Promise<{
        id: number;
        url: string;
        compressedUrl: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    redirect(compressedUrl: string): Promise<{
        url: string;
    }>;
    delete(compressedUrl: string): Promise<{
        id: number;
        url: string;
        compressedUrl: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
