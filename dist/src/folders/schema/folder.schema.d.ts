import * as mongoose from "mongoose";
import { Project } from "src/projects/schema/project.schema";
import { Snippet } from "src/snippets/schema/snippet.schema";
import { User } from "src/users/schema/user.schema";
export declare class Folder {
    name: string;
    description: string;
    parentFolder: string;
    createdAt: Date;
    modifiedAt: Date;
    user: User;
    projects: Array<Project>;
    folders: Array<Folder>;
    snippets: Array<Snippet>;
}
export declare const FolderSchema: mongoose.Schema<Folder, mongoose.Model<Folder, any, any, any, mongoose.Document<unknown, any, Folder> & Folder & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Folder, mongoose.Document<unknown, {}, Folder> & Folder & {
    _id: mongoose.Types.ObjectId;
}>;
