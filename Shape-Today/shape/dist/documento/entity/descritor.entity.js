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
exports.Descritor = void 0;
const typeorm_1 = require("typeorm");
const palavra_chave_entity_1 = require("./palavra-chave.entity");
let Descritor = class Descritor {
};
exports.Descritor = Descritor;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Descritor.prototype, "id_descritor", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 200 }),
    __metadata("design:type", String)
], Descritor.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Descritor.prototype, "resumo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => palavra_chave_entity_1.PalavraChave, palavraChave => palavraChave.documento),
    __metadata("design:type", Array)
], Descritor.prototype, "palavrasChave", void 0);
exports.Descritor = Descritor = __decorate([
    (0, typeorm_1.Entity)('descritor')
], Descritor);
//# sourceMappingURL=descritor.entity.js.map