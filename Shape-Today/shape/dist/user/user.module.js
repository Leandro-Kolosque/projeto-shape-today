"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("../app.controller");
const app_service_1 = require("../app.service");
const database_module_1 = require("../database/database.module");
const user_entity_1 = require("../user/entity/user.entity");
const filiacao_entity_1 = require("../user/entity/filiacao.entity");
const typeorm_1 = require("@nestjs/typeorm");
const user_service_1 = require("./service/user.service");
const user_controller_1 = require("./controller/user.controller");
const filiacao_service_1 = require("./service/filiacao.service");
const filiacao_controller_1 = require("./controller/filiacao.controller");
const treino_service_1 = require("./service/treino.service");
const treino_controller_1 = require("./controller/treino.controller");
const treino_entity_1 = require("./entity/treino.entity");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule,
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, filiacao_entity_1.Filiacao, treino_entity_1.Treino]),
        ],
        controllers: [app_controller_1.AppController, user_controller_1.UserController, filiacao_controller_1.FiliacaoController, treino_controller_1.TreinoController],
        providers: [app_service_1.AppService, user_service_1.UserService, filiacao_service_1.FiliacaoService, treino_service_1.TreinoService],
    })
], UserModule);
//# sourceMappingURL=user.module.js.map