"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentoModule = void 0;
const common_1 = require("@nestjs/common");
const projeto_service_1 = require("./service/projeto.service");
const projeto_controller_1 = require("./controller/projeto.controller");
const database_module_1 = require("../database/database.module");
const typeorm_1 = require("@nestjs/typeorm");
const projeto_entity_1 = require("./entity/projeto.entity");
const documento_service_1 = require("./service/documento.service");
const documento_controller_1 = require("./controller/documento.controller");
const documento_entity_1 = require("./entity/documento.entity");
const projeto_documento_user_entity_1 = require("./entity/projeto_documento_user.entity");
let DocumentoModule = class DocumentoModule {
};
exports.DocumentoModule = DocumentoModule;
exports.DocumentoModule = DocumentoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule,
            typeorm_1.TypeOrmModule.forFeature([projeto_entity_1.Projeto, documento_entity_1.Documento, projeto_documento_user_entity_1.ProjetoDocumentoUser]),
        ],
        providers: [projeto_service_1.ProjetoService, documento_service_1.DocumentoService],
        controllers: [projeto_controller_1.ProjetoController, documento_controller_1.DocumentoController]
    })
], DocumentoModule);
//# sourceMappingURL=documento.module.js.map