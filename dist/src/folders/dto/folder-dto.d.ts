import { User } from "src/users/schema/user.schema";
export declare class CreateFolderDto {
    readonly _id: string;
    readonly name: string;
    readonly description: string;
    readonly user: User;
    readonly parentFolder: string;
}
export declare class UpdateFolderDto {
    readonly _id: string;
    readonly name: string;
    readonly description: string;
    readonly user: User;
    readonly parentFolder: string;
}
