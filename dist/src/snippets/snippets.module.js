"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnippetsModule = void 0;
const common_1 = require("@nestjs/common");
const snippets_service_1 = require("./snippets.service");
const snippets_controller_1 = require("./snippets.controller");
const mongoose_1 = require("@nestjs/mongoose");
const snippet_schema_1 = require("./schema/snippet.schema");
const users_module_1 = require("../users/users.module");
const folders_module_1 = require("../folders/folders.module");
let SnippetsModule = exports.SnippetsModule = class SnippetsModule {
};
exports.SnippetsModule = SnippetsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            mongoose_1.MongooseModule.forFeature([{ name: 'snippets', schema: snippet_schema_1.SnippetSchema }]),
            folders_module_1.FoldersModule
        ],
        providers: [snippets_service_1.SnippetsService],
        exports: [snippets_service_1.SnippetsService],
        controllers: [snippets_controller_1.SnippetsController]
    })
], SnippetsModule);
//# sourceMappingURL=snippets.module.js.map