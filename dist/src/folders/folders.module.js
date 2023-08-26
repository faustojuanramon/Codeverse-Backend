"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoldersModule = void 0;
const common_1 = require("@nestjs/common");
const folders_service_1 = require("./folders.service");
const folders_controller_1 = require("./folders.controller");
const mongoose_1 = require("@nestjs/mongoose");
const folder_schema_1 = require("./schema/folder.schema");
const users_module_1 = require("../users/users.module");
let FoldersModule = exports.FoldersModule = class FoldersModule {
};
exports.FoldersModule = FoldersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'folders', schema: folder_schema_1.FolderSchema }]),
            users_module_1.UsersModule
        ],
        providers: [folders_service_1.FoldersService],
        exports: [folders_service_1.FoldersService],
        controllers: [folders_controller_1.FoldersController]
    })
], FoldersModule);
//# sourceMappingURL=folders.module.js.map