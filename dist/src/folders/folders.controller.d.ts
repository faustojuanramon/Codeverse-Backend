import { FoldersService } from './folders.service';
import { CreateFolderDto, UpdateFolderDto } from './dto/folder-dto';
import { Folder } from './schema/folder.schema';
export declare class FoldersController {
    private readonly foldersService;
    constructor(foldersService: FoldersService);
    createFolder(createFolderDto: CreateFolderDto): Promise<Folder>;
    getFolderById(id: string): Promise<Folder>;
    getFolderByUserId(id: string): Promise<Folder>;
    getFolderByIdPopulated(id: string): Promise<Folder>;
    updateFolderById(id: string, updateFolderDto: UpdateFolderDto): Promise<Folder>;
    addProjectToFolder(folderId: string, projectId: string): Promise<Folder>;
    removeProjectOfFolder(folderId: string, projectId: string): Promise<Folder>;
    addFolderToFolder(folderId: string, otherFolderId: string): Promise<Folder>;
    removeFolderOfFolder(folderId: string, otherFolderId: string): Promise<Folder>;
    addSnippetToFolder(folderId: string, snippetId: string): Promise<Folder>;
    removeSnippetOfFolder(folderId: string, snippetId: string): Promise<Folder>;
    deleteFolderById(id: string): Promise<Folder>;
}
