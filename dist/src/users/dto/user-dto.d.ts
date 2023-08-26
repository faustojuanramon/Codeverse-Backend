import { Plan } from "../schema/user.schema";
export declare class CreateUserDto {
    readonly uid: string;
    readonly name: string;
    readonly email: string;
    readonly plan: Plan;
}
export declare class UpdateUserDto {
    readonly uid: string;
    readonly name: string;
    readonly email: string;
    readonly plan: Plan;
}
export declare class UpdateUserPlanDto {
    readonly plan: Plan;
}
