import { User } from "src/users/schema/user.schema";
import { Type } from "../../files/schema/file.schema";
export declare class CreateSnippetDto {
    readonly type: Type;
    readonly code: string;
    readonly locatedInFolder: string;
    user: User;
}
export declare class UpdateSnippetDTO {
    readonly code: string;
    readonly locatedInFolder: string;
}
