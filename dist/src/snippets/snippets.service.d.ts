/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from "mongoose";
import { Snippet } from './schema/snippet.schema';
import { CreateSnippetDto, UpdateSnippetDTO } from './dto/create-snippet-dto';
import { FoldersService } from 'src/folders/folders.service';
export declare class SnippetsService {
    private readonly snippetsModel;
    private folderService;
    constructor(snippetsModel: Model<Snippet>, folderService: FoldersService);
    createSnippet(createSnippetDto: CreateSnippetDto): Promise<Snippet>;
    getSnippetById(id: string): Promise<Snippet>;
    getSnippetsByUser(userId: string): Promise<Snippet[]>;
    updateSnippet(id: string, updateSnippetDTO: UpdateSnippetDTO): Promise<import("mongoose").Document<unknown, {}, Snippet> & Snippet & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteSnippet(id: string): Promise<Snippet>;
}
