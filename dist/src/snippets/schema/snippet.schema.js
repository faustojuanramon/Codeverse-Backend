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
exports.SnippetSchema = exports.Snippet = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const file_schema_1 = require("../../files/schema/file.schema");
const user_schema_1 = require("../../users/schema/user.schema");
const mongoose_2 = require("mongoose");
let Snippet = exports.Snippet = class Snippet {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Snippet.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Snippet.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'users', required: true }),
    __metadata("design:type", user_schema_1.User)
], Snippet.prototype, "user", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'folders', required: true }),
    __metadata("design:type", String)
], Snippet.prototype, "locatedInFolder", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: Date.now }),
    __metadata("design:type", Date)
], Snippet.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Snippet.prototype, "modifiedAt", void 0);
exports.Snippet = Snippet = __decorate([
    (0, mongoose_1.Schema)()
], Snippet);
exports.SnippetSchema = mongoose_1.SchemaFactory.createForClass(Snippet);
//# sourceMappingURL=snippet.schema.js.map