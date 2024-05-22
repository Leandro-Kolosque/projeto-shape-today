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
exports.DocumentoController = void 0;
const common_1 = require("@nestjs/common");
const documento_service_1 = require("../service/documento.service");
const documento_dto_1 = require("../dto/documento.dto");
const documento_dto_2 = require("../dto/documento.dto");
let DocumentoController = class DocumentoController {
    constructor(documentoService) {
        this.documentoService = documentoService;
    }
    async create(createDocumentoDto, userId, projetoId) {
        return this.documentoService.create(createDocumentoDto, userId, projetoId);
    }
    async findAll() {
        return this.documentoService.findAll();
    }
    async findOne(id) {
        return this.documentoService.findOne(id);
    }
    async update(id, updateDocumentoDto) {
        return this.documentoService.update(id, updateDocumentoDto);
    }
    async remove(id) {
        await this.documentoService.remove(id);
        return null;
    }
};
exports.DocumentoController = DocumentoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Body)("userId")),
    __param(2, (0, common_1.Body)("projetoId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [documento_dto_1.CreateDocumentoDto, Number, Number]),
    __metadata("design:returntype", Promise)
], DocumentoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DocumentoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DocumentoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, documento_dto_2.UpdateDocumentoDto]),
    __metadata("design:returntype", Promise)
], DocumentoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DocumentoController.prototype, "remove", null);
exports.DocumentoController = DocumentoController = __decorate([
    (0, common_1.Controller)("documentos"),
    __metadata("design:paramtypes", [documento_service_1.DocumentoService])
], DocumentoController);
//# sourceMappingURL=documento.controller.js.map