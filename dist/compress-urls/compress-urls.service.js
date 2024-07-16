"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompressUrlsService = void 0;
const database_service_1 = require("../config/database/database.service");
const common_1 = require("@nestjs/common");
const shortid_1 = require("shortid");
let CompressUrlsService = class CompressUrlsService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async compress(url) {
        const shortenedUrl = (0, shortid_1.generate)();
        const createCompressedUrlDto = {
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
    async redirect(compressedUrl) {
        const url = await this.databaseService.compressedUrls.findUnique({
            where: { compressedUrl },
        });
        if (!url) {
            throw new Error("URL not found");
        }
        return url.url;
    }
    async delete(compressedUrl) {
        return this.databaseService.compressedUrls.delete({
            where: { compressedUrl },
        });
    }
};
exports.CompressUrlsService = CompressUrlsService;
exports.CompressUrlsService = CompressUrlsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], CompressUrlsService);
//# sourceMappingURL=compress-urls.service.js.map