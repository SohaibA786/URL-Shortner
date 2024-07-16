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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompressUrlsController = void 0;
const common_1 = require("@nestjs/common");
const compress_urls_service_1 = require("./compress-urls.service");
let CompressUrlsController = class CompressUrlsController {
    constructor(compressUrlsService) {
        this.compressUrlsService = compressUrlsService;
    }
    findAll() {
        return this.compressUrlsService.findAll();
    }
    async compress(body) {
        return await this.compressUrlsService.compress(body.url);
    }
    async redirect(compressedUrl) {
        const redirectUrl = await this.compressUrlsService.redirect(compressedUrl);
        console.log(redirectUrl);
        return { url: redirectUrl };
    }
    async delete(compressedUrl) {
        return await this.compressUrlsService.delete(compressedUrl);
    }
};
exports.CompressUrlsController = CompressUrlsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CompressUrlsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CompressUrlsController.prototype, "compress", null);
__decorate([
    (0, common_1.Get)(":compressedUrl"),
    (0, common_1.Redirect)(),
    __param(0, (0, common_1.Param)("compressedUrl")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompressUrlsController.prototype, "redirect", null);
__decorate([
    (0, common_1.Delete)(":compressedUrl"),
    __param(0, (0, common_1.Param)("compressedUrl")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompressUrlsController.prototype, "delete", null);
exports.CompressUrlsController = CompressUrlsController = __decorate([
    (0, common_1.Controller)("compress-urls"),
    __metadata("design:paramtypes", [compress_urls_service_1.CompressUrlsService])
], CompressUrlsController);
//# sourceMappingURL=compress-urls.controller.js.map