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
exports.loginSuccessResponse = exports.loginFailureDto = exports.loginDto = exports.LoginFailureDto = exports.LoginSuccessDto = exports.LoginDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class LoginDto {
}
exports.LoginDto = LoginDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], LoginDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], LoginDto.prototype, "senha", void 0);
class LoginSuccessDto {
}
exports.LoginSuccessDto = LoginSuccessDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], LoginSuccessDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], LoginSuccessDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], LoginSuccessDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: LoginDto }),
    __metadata("design:type", LoginDto)
], LoginSuccessDto.prototype, "user", void 0);
class LoginFailureDto {
}
exports.LoginFailureDto = LoginFailureDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], LoginFailureDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], LoginFailureDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], LoginFailureDto.prototype, "error", void 0);
exports.loginDto = {
    email: "exemplo@email.com",
    senha: "sua_senha",
};
exports.loginFailureDto = {
    status: 400,
    description: "Credenciais inválidas.",
    type: LoginFailureDto,
};
exports.loginSuccessResponse = {
    status: 201,
    description: "Login realizado com sucesso.",
    access_token: "string",
    type: LoginSuccessDto,
};
//# sourceMappingURL=login.response.dto.js.map