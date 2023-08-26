import { Folder } from "./schema/folder.schema";
import { Model } from "mongoose";
import { CreateFolderDto, UpdateFolderDto } from "./dto/folder-dto";
export declare class FoldersService {
    private readonly foldersModel;
    constructor(foldersModel: Model<Folder>);
    createFolder(createFolderDto: CreateFolderDto): Promise<Folder>;
    getFolderById(id: string): Promise<Folder>;
    getFolderByUserId(id: string): Promise<Folder | null>;
    getFolderPopulated(id: string): Promise<Folder>;
    updateFolder(id: string, updateFolderDto: UpdateFolderDto): Promise<Folder>;
    addProject(id: string, projectId: string): Promise<Folder>;
    removeProject(id: string, projectId: string): Promise<Folder>;
    addFolder(id: string, folderId: string): Promise<Folder>;
    removeFolder(id: string, folderId: string): Promise<Folder>;
    addSnippet(id: string, snippetId: string): Promise<Folder>;
    removeSnippet(id: string, snippetId: string): Promise<Folder>;
    deteleFolder(id: string): Promise<Folder>;
}
