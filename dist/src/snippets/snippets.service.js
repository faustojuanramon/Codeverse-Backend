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
exports.SnippetsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const folders_service_1 = require("../folders/folders.service");
let SnippetsService = exports.SnippetsService = class SnippetsService {
    constructor(snippetsModel, folderService) {
        this.snippetsModel = snippetsModel;
        this.folderService = folderService;
    }
    async createSnippet(createSnippetDto) {
        const snippet = new this.snippetsModel(createSnippetDto);
        await snippet.save();
        await this.folderService.addSnippet(snippet.locatedInFolder, snippet.id);
        return snippet;
    }
    async getSnippetById(id) {
        return await this.snippetsModel.findById(id);
    }
    async getSnippetsByUser(userId) {
        return await this.snippetsModel.find({ user: userId });
    }
    async updateSnippet(id, updateSnippetDTO) {
        return await this.snippetsModel.findByIdAndUpdate(id, { code: updateSnippetDTO.code, modifiedAt: Date.now() }, { new: true });
    }
    async deleteSnippet(id) {
        const snippetToBeDeleted = await this.getSnippetById(id);
        await this.folderService.removeSnippet(snippetToBeDeleted.locatedInFolder, id);
        return await this.snippetsModel.findByIdAndDelete(id);
    }
};
exports.SnippetsService = SnippetsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('snippets')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        folders_service_1.FoldersService])
], SnippetsService);
//# sourceMappingURL=snippets.service.js.map