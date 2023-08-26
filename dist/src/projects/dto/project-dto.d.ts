import { Folder } from "src/folders/schema/folder.schema";
import { User } from "src/users/schema/user.schema";
export interface CreateProjectDto {
    readonly name: string;
    readonly description: string;
    readonly parentFolder: Folder;
    readonly user: User;
}
export declare class UpdateProjectDto {
    readonly name: string;
    readonly description: string;
    readonly parentFolder: Folder;
}
