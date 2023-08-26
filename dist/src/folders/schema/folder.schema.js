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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderSchema = exports.Folder = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const user_schema_1 = require("../../users/schema/user.schema");
let Folder = exports.Folder = class Folder {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Folder.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Folder.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'folders' }),
    __metadata("design:type", String)
], Folder.prototype, "parentFolder", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: Date.now }),
    __metadata("design:type", Date)
], Folder.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Folder.prototype, "modifiedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true }),
    __metadata("design:type", user_schema_1.User)
], Folder.prototype, "user", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'projects' }], default: [] }),
    __metadata("design:type", Array)
], Folder.prototype, "projects", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'folders' }], default: [] }),
    __metadata("design:type", Array)
], Folder.prototype, "folders", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'snippets' }], default: [] }),
    __metadata("design:type", Array)
], Folder.prototype, "snippets", void 0);
exports.Folder = Folder = __decorate([
    (0, mongoose_1.Schema)()
], Folder);
exports.FolderSchema = mongoose_1.SchemaFactory.createForClass(Folder);
//# sourceMappingURL=folder.schema.js.map