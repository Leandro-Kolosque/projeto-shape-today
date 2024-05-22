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
exports.Projeto = void 0;
const typeorm_1 = require("typeorm");
const projeto_documento_user_entity_1 = require("./projeto_documento_user.entity");
let Projeto = class Projeto {
};
exports.Projeto = Projeto;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Projeto.prototype, "id_projeto", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 40 }),
    __metadata("design:type", String)
], Projeto.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    __metadata("design:type", Number)
], Projeto.prototype, "ano_inicial", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    __metadata("design:type", Number)
], Projeto.prototype, "ano_final", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => projeto_documento_user_entity_1.ProjetoDocumentoUser, (pd) => pd.projeto),
    __metadata("design:type", Array)
], Projeto.prototype, "projetoDocumentoUsers", void 0);
exports.Projeto = Projeto = __decorate([
    (0, typeorm_1.Entity)("projeto")
], Projeto);
//# sourceMappingURL=projeto.entity.js.map