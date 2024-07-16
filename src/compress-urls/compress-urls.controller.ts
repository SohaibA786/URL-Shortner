import { Body, Controller, Delete, Get, Param, Post, Redirect } from "@nestjs/common";
import { CompressUrlsService } from "./compress-urls.service";

@Controller("compress-urls")
export class CompressUrlsController {
  constructor(private readonly compressUrlsService: CompressUrlsService) {}

  @Get()
  findAll() {
    return this.compressUrlsService.findAll();
  }

  @Post()
  async compress(@Body() body: { url: string }) {
    return await this.compressUrlsService.compress(body.url);
  }

  @Get(":compressedUrl")
  @Redirect()
  async redirect(@Param("compressedUrl") compressedUrl: string) {
    const redirectUrl = await this.compressUrlsService.redirect(compressedUrl);
    console.log(redirectUrl);
    return { url: redirectUrl };
  }

  @Delete(":compressedUrl")
  async delete(@Param("compressedUrl") compressedUrl: string) {
    return await this.compressUrlsService.delete(compressedUrl);
  }
}
