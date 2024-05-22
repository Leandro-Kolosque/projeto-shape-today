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
exports.ProjetoDocumentoUser = void 0;
const typeorm_1 = require("typeorm");
const projeto_entity_1 = require("./projeto.entity");
const documento_entity_1 = require("./documento.entity");
const user_entity_1 = require("../../user/entity/user.entity");
let ProjetoDocumentoUser = class ProjetoDocumentoUser {
};
exports.ProjetoDocumentoUser = ProjetoDocumentoUser;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], ProjetoDocumentoUser.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], ProjetoDocumentoUser.prototype, "projetoId", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], ProjetoDocumentoUser.prototype, "documentoId", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], ProjetoDocumentoUser.prototype, "proprietario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => projeto_entity_1.Projeto, projeto => projeto.projetoDocumentoUsers),
    (0, typeorm_1.JoinColumn)({ name: 'projetoId' }),
    __metadata("design:type", projeto_entity_1.Projeto)
], ProjetoDocumentoUser.prototype, "projeto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => documento_entity_1.Documento, documento => documento.projetoDocumentoUsers),
    (0, typeorm_1.JoinColumn)({ name: 'documentoId' }),
    __metadata("design:type", documento_entity_1.Documento)
], ProjetoDocumentoUser.prototype, "documento", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.projetoDocumentoUsers),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", user_entity_1.User)
], ProjetoDocumentoUser.prototype, "user", void 0);
exports.ProjetoDocumentoUser = ProjetoDocumentoUser = __decorate([
    (0, typeorm_1.Entity)('projeto_documento_user')
], ProjetoDocumentoUser);
//# sourceMappingURL=projeto_documento_user.entity.js.map