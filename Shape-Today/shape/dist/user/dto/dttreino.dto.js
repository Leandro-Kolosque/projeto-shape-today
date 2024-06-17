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
exports.UpdateDttreinoDto = exports.CreateDttreinoDto = void 0;
const class_validator_1 = require("class-validator");
const mapped_types_1 = require("@nestjs/mapped-types");
class CreateDttreinoDto {
}
exports.CreateDttreinoDto = CreateDttreinoDto;
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.Length)(10, 10, { message: 'a data deve ser no formato xx/xx/xxxx' }),
    __metadata("design:type", Date)
], CreateDttreinoDto.prototype, "data_inicio", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.Length)(10, 10, { message: 'a data deve ser no formato xx/xx/xxxx' }),
    __metadata("design:type", Date)
], CreateDttreinoDto.prototype, "data_fim", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateDttreinoDto.prototype, "userId", void 0);
class UpdateDttreinoDto extends (0, mapped_types_1.PartialType)(CreateDttreinoDto) {
}
exports.UpdateDttreinoDto = UpdateDttreinoDto;
//# sourceMappingURL=dttreino.dto.js.map