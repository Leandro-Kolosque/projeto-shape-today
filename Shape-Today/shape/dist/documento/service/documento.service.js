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
exports.DocumentoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const documento_entity_1 = require("../entity/documento.entity");
const projeto_documento_user_entity_1 = require("../entity/projeto_documento_user.entity");
let DocumentoService = class DocumentoService {
    constructor(documentoRepository, projetoDocumentoUserRepository) {
        this.documentoRepository = documentoRepository;
        this.projetoDocumentoUserRepository = projetoDocumentoUserRepository;
    }
    async create(createDocumentoDto, userId, projetoId) {
        const documento = this.documentoRepository.create(createDocumentoDto);
        const savedDocumento = await this.documentoRepository.save(documento);
        const projetoDocumentoUser = this.projetoDocumentoUserRepository.create({
            documentoId: savedDocumento.id_documento,
            projetoId,
            userId,
            proprietario: true,
        });
        await this.projetoDocumentoUserRepository.save(projetoDocumentoUser);
        return savedDocumento;
    }
    async findAll() {
        return this.documentoRepository.find({
            relations: ["palavrasChave", "projetoDocumentoUsers"],
        });
    }
    async findOne(id) {
        const documento = await this.documentoRepository.findOne({
            where: { id_documento: id },
            relations: ["palavrasChave", "projetoDocumentoUsers"],
        });
        if (!documento) {
            throw new common_1.NotFoundException(`Documento de ID ${id} não encontrado`);
        }
        return documento;
    }
    async update(id, updateDocumentoDto) {
        const documento = await this.documentoRepository.preload({
            id_documento: id,
            ...updateDocumentoDto,
        });
        if (!documento) {
            throw new common_1.NotFoundException(`Documento de ID ${id} não encontrado`);
        }
        return this.documentoRepository.save(documento);
    }
    async remove(id) {
        const documento = await this.findOne(id);
        await this.documentoRepository.delete(id);
    }
};
exports.DocumentoService = DocumentoService;
exports.DocumentoService = DocumentoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(documento_entity_1.Documento)),
    __param(1, (0, typeorm_1.InjectRepository)(projeto_documento_user_entity_1.ProjetoDocumentoUser)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], DocumentoService);
//# sourceMappingURL=documento.service.js.map