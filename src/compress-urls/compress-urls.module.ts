import { Module } from "@nestjs/common";
import { CompressUrlsController } from "./compress-urls.controller";
import { CompressUrlsService } from "./compress-urls.service";
import { DatabaseModule } from "src/config/database/database.module";

@Module({
    imports: [DatabaseModule],
    controllers: [CompressUrlsController],
    providers: [CompressUrlsService]
})
export class CompressUrlsModule {}
