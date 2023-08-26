import * as mongoose from "mongoose";
import { File } from "../../files/schema/file.schema";
import { User } from "src/users/schema/user.schema";
export declare class Project {
    name: string;
    description: string;
    createdAt: Date;
    locatedInFolder: string;
    modifiedAt: Date;
    user: User;
    files: Array<File>;
    colaborators: Array<User>;
}
export declare const ProjectSchema: mongoose.Schema<Project, mongoose.Model<Project, any, any, any, mongoose.Document<unknown, any, Project> & Project & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Project, mongoose.Document<unknown, {}, Project> & Project & {
    _id: mongoose.Types.ObjectId;
}>;
