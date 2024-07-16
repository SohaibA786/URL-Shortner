import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CompressUrlsModule } from "./compress-urls/compress-urls.module";
import { DatabaseModule } from "./config/database/database.module";

@Module({
  imports: [CompressUrlsModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
