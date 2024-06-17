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
exports.Treino = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const dttreino_entity_1 = require("./dttreino.entity");
let Treino = class Treino {
};
exports.Treino = Treino;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Treino.prototype, "id_perfil", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 10 }),
    __metadata("design:type", String)
], Treino.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 10 }),
    __metadata("design:type", String)
], Treino.prototype, "carga", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 10 }),
    __metadata("design:type", String)
], Treino.prototype, "serie", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 10 }),
    __metadata("design:type", String)
], Treino.prototype, "repeticao", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.treinos),
    __metadata("design:type", user_entity_1.User)
], Treino.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => dttreino_entity_1.Dttreino, treino => treino.user),
    __metadata("design:type", Array)
], Treino.prototype, "dttreinos", void 0);
exports.Treino = Treino = __decorate([
    (0, typeorm_1.Entity)('treino')
], Treino);
//# sourceMappingURL=treino.entity.js.map