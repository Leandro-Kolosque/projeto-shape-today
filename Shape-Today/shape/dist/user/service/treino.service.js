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
exports.TreinoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_service_1 = require("./user.service");
const treino_entity_1 = require("../entity/treino.entity");
let TreinoService = class TreinoService {
    constructor(treinoRepository, userService) {
        this.treinoRepository = treinoRepository;
        this.userService = userService;
    }
    async create(createTreinoDto) {
        const user = await this.userService.findOne(createTreinoDto.userId);
        if (!user) {
            throw new common_1.NotFoundException(`Usuário não encontrado.`);
        }
        const newTreino = this.treinoRepository.create({
            ...createTreinoDto,
            user: user,
        });
        return await this.treinoRepository.save(newTreino);
    }
    async findAll() {
        return await this.userService.findAll();
    }
    async findOne(id) {
        const treino = await this.treinoRepository.findOne({
            where: { id_perfil: id },
            relations: ["user"],
        });
        if (!treino) {
            throw new common_1.NotFoundException(`Treino inexistente.`);
        }
        return treino;
    }
    async update(id, updateTreinoDto) {
        const treino = await this.findOne(id);
        delete updateTreinoDto.userId;
        const updated = this.treinoRepository.merge(treino, updateTreinoDto);
        return await this.treinoRepository.save(updated);
    }
    async remove(id) {
        const treino = await this.findOne(id);
        await this.treinoRepository.remove(treino);
    }
};
exports.TreinoService = TreinoService;
exports.TreinoService = TreinoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(treino_entity_1.Treino)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService])
], TreinoService);
//# sourceMappingURL=treino.service.js.map