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
exports.DttreinoController = void 0;
const common_1 = require("@nestjs/common");
const dttreino_service_1 = require("../service/dttreino.service");
const dttreino_dto_1 = require("../dto/dttreino.dto");
let DttreinoController = class DttreinoController {
    constructor(dttreinoService) {
        this.dttreinoService = dttreinoService;
    }
    async create(createDttreinoDto) {
        return await this.dttreinoService.create(createDttreinoDto);
    }
    async findAll() {
        return await this.dttreinoService.findAll();
    }
    async findOne(id) {
        return await this.dttreinoService.findOne(id);
    }
    async update(id, updateDttreinoDto) {
        return await this.dttreinoService.update(id, updateDttreinoDto);
    }
    async remove(id) {
        return await this.dttreinoService.remove(id);
    }
};
exports.DttreinoController = DttreinoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dttreino_dto_1.CreateDttreinoDto]),
    __metadata("design:returntype", Promise)
], DttreinoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DttreinoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DttreinoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dttreino_dto_1.UpdateDttreinoDto]),
    __metadata("design:returntype", Promise)
], DttreinoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DttreinoController.prototype, "remove", null);
exports.DttreinoController = DttreinoController = __decorate([
    (0, common_1.Controller)("dttreino"),
    __metadata("design:paramtypes", [dttreino_service_1.DttreinoService])
], DttreinoController);
//# sourceMappingURL=dttreino.controller.js.map