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
exports.UpdateTreinoDto = exports.CreateTreinoDto = void 0;
const class_validator_1 = require("class-validator");
const mapped_types_1 = require("@nestjs/mapped-types");
const swagger_1 = require("@nestjs/swagger");
class CreateTreinoDto {
}
exports.CreateTreinoDto = CreateTreinoDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nome do usuário',
        minimum: 8,
        maximum: 40,
        example: 'João Silva',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 2, { message: 'o tamanho do código da máquina deve ser de no máximo 2 caracteres' }),
    __metadata("design:type", String)
], CreateTreinoDto.prototype, "codigo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 4, { message: 'o peso minimo da endereço é de 1kg e o peso máximo é de 9999kg' }),
    __metadata("design:type", String)
], CreateTreinoDto.prototype, "carga", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 2, { message: 'o minino de séries é 1 e o máximo de séries é de 99' }),
    __metadata("design:type", String)
], CreateTreinoDto.prototype, "serie", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 3, { message: 'o minimo de repetições é 1 e o máximo é 999' }),
    __metadata("design:type", String)
], CreateTreinoDto.prototype, "repeticao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID do usuário',
        example: 1,
    }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateTreinoDto.prototype, "userId", void 0);
class UpdateTreinoDto extends (0, mapped_types_1.PartialType)(CreateTreinoDto) {
}
exports.UpdateTreinoDto = UpdateTreinoDto;
//# sourceMappingURL=treino.dto.js.map