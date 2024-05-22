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
exports.ProjetoController = void 0;
const common_1 = require("@nestjs/common");
const projeto_service_1 = require("../service/projeto.service");
const projeto_dto_1 = require("../dto/projeto.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_strategy_1 = require("../../auth/guard/jwt-auth.guard.strategy");
let ProjetoController = class ProjetoController {
    constructor(projetoService) {
        this.projetoService = projetoService;
    }
    async create(createProjetoDto) {
        return this.projetoService.create(createProjetoDto);
    }
    async update(id, updateProjetoDto) {
        return this.projetoService.update(id, updateProjetoDto);
    }
    async remove(id) {
        await this.projetoService.remove(id);
        return null;
    }
    async findAll() {
        return this.projetoService.findAll();
    }
    async findOne(id) {
        return this.projetoService.findOne(id);
    }
};
exports.ProjetoController = ProjetoController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [projeto_dto_1.CreateProjetoDto]),
    __metadata("design:returntype", Promise)
], ProjetoController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, projeto_dto_1.UpdateProjetoDto]),
    __metadata("design:returntype", Promise)
], ProjetoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProjetoController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProjetoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProjetoController.prototype, "findOne", null);
exports.ProjetoController = ProjetoController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_strategy_1.JwtAuthGuard),
    (0, common_1.Controller)("projetos"),
    (0, swagger_1.ApiTags)("projetos"),
    __metadata("design:paramtypes", [projeto_service_1.ProjetoService])
], ProjetoController);
//# sourceMappingURL=projeto.controller.js.map