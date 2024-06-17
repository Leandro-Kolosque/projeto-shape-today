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
exports.DttreinoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_service_1 = require("./user.service");
const dttreino_entity_1 = require("../entity/dttreino.entity");
let DttreinoService = class DttreinoService {
    constructor(dttreinoRepository, userService) {
        this.dttreinoRepository = dttreinoRepository;
        this.userService = userService;
    }
    async create(createDttreinoDto) {
        const user = await this.userService.findOne(createDttreinoDto.userId);
        if (!user) {
            throw new common_1.NotFoundException(`Usuário não encontrado.`);
        }
        const newDttreino = this.dttreinoRepository.create({
            ...createDttreinoDto,
            user: user,
        });
        return await this.dttreinoRepository.save(newDttreino);
    }
    async findAll() {
        return await this.userService.findAll();
    }
    async findOne(id) {
        const dttreino = await this.dttreinoRepository.findOne({
            where: { id_perfil: id },
            relations: ["user"],
        });
        if (!dttreino) {
            throw new common_1.NotFoundException(`Data inválida não encontrada.`);
        }
        return dttreino;
    }
    async update(id, updateDttreinoDto) {
        const dttreino = await this.findOne(id);
        delete updateDttreinoDto.userId;
        const updated = this.dttreinoRepository.merge(dttreino, updateDttreinoDto);
        return await this.dttreinoRepository.save(updated);
    }
    async remove(id) {
        const dttreino = await this.findOne(id);
        await this.dttreinoRepository.remove(dttreino);
    }
};
exports.DttreinoService = DttreinoService;
exports.DttreinoService = DttreinoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(dttreino_entity_1.Dttreino)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService])
], DttreinoService);
//# sourceMappingURL=dttreino.service.js.map