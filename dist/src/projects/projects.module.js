"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsModule = void 0;
const common_1 = require("@nestjs/common");
const projects_service_1 = require("./projects.service");
const mongoose_1 = require("@nestjs/mongoose");
const project_schema_1 = require("./schema/project.schema");
const projects_controller_1 = require("./projects.controller");
const folders_module_1 = require("../folders/folders.module");
let ProjectsModule = exports.ProjectsModule = class ProjectsModule {
};
exports.ProjectsModule = ProjectsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'projects', schema: project_schema_1.ProjectSchema }]),
            folders_module_1.FoldersModule
        ],
        providers: [projects_service_1.ProjectsService],
        exports: [projects_service_1.ProjectsService],
        controllers: [projects_controller_1.ProjectsController]
    })
], ProjectsModule);
//# sourceMappingURL=projects.module.js.map