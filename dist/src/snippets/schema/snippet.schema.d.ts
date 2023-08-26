import { Type } from "../../files/schema/file.schema";
import { User } from "src/users/schema/user.schema";
import mongoose from "mongoose";
export declare class Snippet {
    type: Type;
    code: string;
    user: User;
    locatedInFolder: string;
    createdAt: Date;
    modifiedAt: Date;
}
export declare const SnippetSchema: mongoose.Schema<Snippet, mongoose.Model<Snippet, any, any, any, mongoose.Document<unknown, any, Snippet> & Snippet & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Snippet, mongoose.Document<unknown, {}, Snippet> & Snippet & {
    _id: mongoose.Types.ObjectId;
}>;
