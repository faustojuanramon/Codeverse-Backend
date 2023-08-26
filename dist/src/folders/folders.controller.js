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
exports.FoldersController = void 0;
const common_1 = require("@nestjs/common");
const folders_service_1 = require("./folders.service");
const folder_dto_1 = require("./dto/folder-dto");
let FoldersController = exports.FoldersController = class FoldersController {
    constructor(foldersService) {
        this.foldersService = foldersService;
    }
    createFolder(createFolderDto) {
        return this.foldersService.createFolder(createFolderDto);
    }
    getFolderById(id) {
        return this.foldersService.getFolderById(id);
    }
    getFolderByUserId(id) {
        return this.foldersService.getFolderByUserId(id);
    }
    getFolderByIdPopulated(id) {
        return this.foldersService.getFolderPopulated(id);
    }
    updateFolderById(id, updateFolderDto) {
        return this.foldersService.updateFolder(id, updateFolderDto);
    }
    addProjectToFolder(folderId, projectId) {
        return this.foldersService.addProject(folderId, projectId);
    }
    removeProjectOfFolder(folderId, projectId) {
        return this.foldersService.removeProject(folderId, projectId);
    }
    addFolderToFolder(folderId, otherFolderId) {
        return this.foldersService.addFolder(folderId, otherFolderId);
    }
    removeFolderOfFolder(folderId, otherFolderId) {
        return this.foldersService.removeFolder(folderId, otherFolderId);
    }
    addSnippetToFolder(folderId, snippetId) {
        return this.foldersService.addSnippet(folderId, snippetId);
    }
    removeSnippetOfFolder(folderId, snippetId) {
        return this.foldersService.removeSnippet(folderId, snippetId);
    }
    deleteFolderById(id) {
        return this.foldersService.deteleFolder(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [folder_dto_1.CreateFolderDto]),
    __metadata("design:returntype", Promise)
], FoldersController.prototype, "createFolder", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FoldersController.prototype, "getFolderById", null);
__decorate([
    (0, common_1.Get)('/user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FoldersController.prototype, "getFolderByUserId", null);
__decorate([
    (0, common_1.Get)('/:id/populated'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FoldersController.prototype, "getFolderByIdPopulated", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, folder_dto_1.UpdateFolderDto]),
    __metadata("design:returntype", Promise)
], FoldersController.prototype, "updateFolderById", null);
__decorate([
    (0, common_1.Put)('/:folderId/add-project/:projectId'),
    __param(0, (0, common_1.Param)('folderId')),
    __param(1, (0, common_1.Param)('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FoldersController.prototype, "addProjectToFolder", null);
__decorate([
    (0, common_1.Put)('/:folderId/remove-project/:projectId'),
    __param(0, (0, common_1.Param)('folderId')),
    __param(1, (0, common_1.Param)('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FoldersController.prototype, "removeProjectOfFolder", null);
__decorate([
    (0, common_1.Put)('/:folderId/add-folder/:otherFolderId'),
    __param(0, (0, common_1.Param)('folderId')),
    __param(1, (0, common_1.Param)('otherFolderId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FoldersController.prototype, "addFolderToFolder", null);
__decorate([
    (0, common_1.Put)('/:folderId/remove-folder/:otherFolderId'),
    __param(0, (0, common_1.Param)('folderId')),
    __param(1, (0, common_1.Param)('otherFolderId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FoldersController.prototype, "removeFolderOfFolder", null);
__decorate([
    (0, common_1.Put)('/:folderId/add-snippet/:snippetId'),
    __param(0, (0, common_1.Param)('folderId')),
    __param(1, (0, common_1.Param)('snippetId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FoldersController.prototype, "addSnippetToFolder", null);
__decorate([
    (0, common_1.Put)('/:folderId/remove-snippet/:snippetId'),
    __param(0, (0, common_1.Param)('folderId')),
    __param(1, (0, common_1.Param)('snippetId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FoldersController.prototype, "removeSnippetOfFolder", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FoldersController.prototype, "deleteFolderById", null);
exports.FoldersController = FoldersController = __decorate([
    (0, common_1.Controller)('folders'),
    __metadata("design:paramtypes", [folders_service_1.FoldersService])
], FoldersController);
//# sourceMappingURL=folders.controller.js.map