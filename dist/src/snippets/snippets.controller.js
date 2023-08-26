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
exports.SnippetsController = void 0;
const common_1 = require("@nestjs/common");
const create_snippet_dto_1 = require("./dto/create-snippet-dto");
const snippets_service_1 = require("./snippets.service");
let SnippetsController = exports.SnippetsController = class SnippetsController {
    constructor(snippetsService) {
        this.snippetsService = snippetsService;
    }
    create(createSnippetDto) {
        return this.snippetsService.createSnippet(createSnippetDto);
    }
    getById(id) {
        return this.snippetsService.getSnippetById(id);
    }
    getAll(userId) {
        return this.snippetsService.getSnippetsByUser(userId);
    }
    update(id, updateSnippetDto) {
        return this.snippetsService.updateSnippet(id, updateSnippetDto);
    }
    delete(id) {
        return this.snippetsService.deleteSnippet(id);
    }
};
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_snippet_dto_1.CreateSnippetDto]),
    __metadata("design:returntype", Promise)
], SnippetsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SnippetsController.prototype, "getById", null);
__decorate([
    (0, common_1.Get)('/user/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SnippetsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_snippet_dto_1.UpdateSnippetDTO]),
    __metadata("design:returntype", Promise)
], SnippetsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SnippetsController.prototype, "delete", null);
exports.SnippetsController = SnippetsController = __decorate([
    (0, common_1.Controller)('snippets'),
    __metadata("design:paramtypes", [snippets_service_1.SnippetsService])
], SnippetsController);
//# sourceMappingURL=snippets.controller.js.map