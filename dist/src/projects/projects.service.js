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
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const folders_service_1 = require("../folders/folders.service");
let ProjectsService = exports.ProjectsService = class ProjectsService {
    constructor(projectsModel, folderService) {
        this.projectsModel = projectsModel;
        this.folderService = folderService;
    }
    async createProject(createProjectDto) {
        const project = new this.projectsModel(createProjectDto);
        await project.save();
        await this.folderService.addProject(project.locatedInFolder, project.id);
        return project;
    }
    async getProjectById(id) {
        return this.projectsModel.findById(id);
    }
    async updateProject(id, updateProjectDto) {
        return this.projectsModel.findByIdAndUpdate(id, { updateProjectDto, modifiedAt: Date.now() }, { new: true });
    }
    async addFile(id, fileId) {
        return this.projectsModel.findByIdAndUpdate(id, {
            $push: { files: fileId },
            modifiedAt: Date.now()
        }, { new: true });
    }
    async removeFile(id, fileId) {
        return this.projectsModel.findByIdAndUpdate(id, {
            $pull: { files: fileId },
            modifiedAt: Date.now()
        }, { new: true });
    }
    async addColaborator(id, userId) {
        return this.projectsModel.findByIdAndUpdate(id, {
            $push: { colaborators: userId }
        }, { new: true });
    }
    async removeColaborator(id, userId) {
        return this.projectsModel.findByIdAndUpdate(id, {
            $pull: { colaborators: userId }
        }, { new: true });
    }
    async deleteProject(id) {
        const projectToBeDeleted = await this.getProjectById(id);
        await this.folderService.removeProject(projectToBeDeleted.locatedInFolder, id);
        return await this.projectsModel.findByIdAndDelete(id);
    }
};
exports.ProjectsService = ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('projects')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        folders_service_1.FoldersService])
], ProjectsService);
//# sourceMappingURL=projects.service.js.map