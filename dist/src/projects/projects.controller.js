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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsController = void 0;
const common_1 = require("@nestjs/common");
const projects_service_1 = require("./projects.service");
const project_dto_1 = require("./dto/project-dto");
let ProjectsController = exports.ProjectsController = class ProjectsController {
    constructor(projectsService) {
        this.projectsService = projectsService;
    }
    createProject(createProjectDto) {
        return this.projectsService.createProject(createProjectDto);
    }
    getProjectById(id) {
        return this.projectsService.getProjectById(id);
    }
    updateProjectById(id, updateProjectDto) {
        return this.projectsService.updateProject(id, updateProjectDto);
    }
    addFileToProject(projectId, fileId) {
        return this.projectsService.addFile(projectId, fileId);
    }
    removeFileOfProject(projectId, fileId) {
        return this.projectsService.removeFile(projectId, fileId);
    }
    addColaboratorToProject(projectId, userId) {
        return this.projectsService.addColaborator(projectId, userId);
    }
    removeColaboratorOfProject(projectId, userId) {
        return this.projectsService.removeColaborator(projectId, userId);
    }
    deleteProject(id) {
        return this.projectsService.deleteProject(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "createProject", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "getProjectById", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, project_dto_1.UpdateProjectDto]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "updateProjectById", null);
__decorate([
    (0, common_1.Put)('/:projectId/add-file/:fileId'),
    __param(0, (0, common_1.Param)('projectId')),
    __param(1, (0, common_1.Param)('fileId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "addFileToProject", null);
__decorate([
    (0, common_1.Put)('/:projectId/remove-file/:fileId'),
    __param(0, (0, common_1.Param)('projectId')),
    __param(1, (0, common_1.Param)('fileId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "removeFileOfProject", null);
__decorate([
    (0, common_1.Put)('/:projectId/add-colab/:userId'),
    __param(0, (0, common_1.Param)('projectId')),
    __param(1, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "addColaboratorToProject", null);
__decorate([
    (0, common_1.Put)('/:projectId/remove-colab/:userId'),
    __param(0, (0, common_1.Param)('projectId')),
    __param(1, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "removeColaboratorOfProject", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "deleteProject", null);
exports.ProjectsController = ProjectsController = __decorate([
    (0, common_1.Controller)('projects'),
    __metadata("design:paramtypes", [projects_service_1.ProjectsService])
], ProjectsController);
//# sourceMappingURL=projects.controller.js.map