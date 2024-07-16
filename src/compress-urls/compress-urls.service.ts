import { DatabaseService } from "src/config/database/database.service";
import { Prisma } from "@prisma/client";
import { Injectable } from "@nestjs/common";
import { generate } from "shortid";

@Injectable()
export class CompressUrlsService {
  constructor(private readonly databaseService: DatabaseService) {}
  async compress(url: string) {
    const shortenedUrl = generate();

    const createCompressedUrlDto: Prisma.CompressedUrlsCreateInput = {
      url: url,
      compressedUrl: shortenedUrl,
    };

    console.log(createCompressedUrlDto);

    return this.databaseService.compressedUrls.create({
      data: createCompressedUrlDto,
    });
  }

  findAll() {
    return this.databaseService.compressedUrls.findMany();
  }

  async redirect(compressedUrl: string) {
    const url = await this.databaseService.compressedUrls.findUnique({
      where: { compressedUrl },
    });

    if (!url) {
      throw new Error("URL not found");
    }

    return url.url;
  }

  async delete(compressedUrl: string) {
    return this.databaseService.compressedUrls.delete({
      where: { compressedUrl },
    });
  }
}
