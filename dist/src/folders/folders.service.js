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
exports.FoldersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let FoldersService = exports.FoldersService = class FoldersService {
    constructor(foldersModel) {
        this.foldersModel = foldersModel;
    }
    async createFolder(createFolderDto) {
        const folder = new this.foldersModel(createFolderDto);
        await folder.save();
        await this.addFolder(folder.parentFolder, folder.id);
        return folder;
    }
    async getFolderById(id) {
        return await this.foldersModel.findById(id);
    }
    async getFolderByUserId(id) {
        return await this.foldersModel.findOne({ user: id });
    }
    async getFolderPopulated(id) {
        return await this.foldersModel
            .findById(id)
            .populate("users projects folders snippets");
    }
    async updateFolder(id, updateFolderDto) {
        const folder = await this.foldersModel.findByIdAndUpdate(id, { updateFolderDto, modifiedAt: Date.now() }, { new: true });
        return folder;
    }
    async addProject(id, projectId) {
        return await this.foldersModel.findByIdAndUpdate(id, {
            $push: { projects: new mongoose_2.default.Types.ObjectId(projectId) },
            modifiedAt: Date.now(),
        }, { new: true });
    }
    async removeProject(id, projectId) {
        return await this.foldersModel.findByIdAndUpdate(id, {
            $pull: { projects: new mongoose_2.default.Types.ObjectId(projectId) },
            modifiedAt: Date.now(),
        }, { new: true });
    }
    async addFolder(id, folderId) {
        return await this.foldersModel.findByIdAndUpdate(id, {
            $push: { folders: new mongoose_2.default.mongo.ObjectId(folderId) },
            modifiedAt: Date.now(),
        }, { new: true });
    }
    async removeFolder(id, folderId) {
        return await this.foldersModel.findByIdAndUpdate(id, {
            $pull: { folders: folderId },
            modifiedAt: Date.now(),
        }, { new: true });
    }
    async addSnippet(id, snippetId) {
        return await this.foldersModel.findByIdAndUpdate(id, {
            $push: { snippets: snippetId },
            modifiedAt: Date.now(),
        }, { new: true });
    }
    async removeSnippet(id, snippetId) {
        return await this.foldersModel.findByIdAndUpdate(id, {
            $pull: { snippets: snippetId },
            modifiedAt: Date.now(),
        }, { new: true });
    }
    async deteleFolder(id) {
        const folderToBeDeleted = await this.getFolderById(id);
        await this.removeFolder(folderToBeDeleted.parentFolder, id);
        return await this.foldersModel.findByIdAndDelete(id);
    }
};
exports.FoldersService = FoldersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)("folders")),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FoldersService);
//# sourceMappingURL=folders.service.js.map