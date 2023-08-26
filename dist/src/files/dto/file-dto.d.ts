import { Type } from "../schema/file.schema";
export declare class CreateFileDto {
    readonly type: Type;
    readonly content: string;
}
export declare class UpdateFileDto {
    readonly content: string;
}
