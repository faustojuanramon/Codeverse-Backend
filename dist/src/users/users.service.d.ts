import { User } from "./schema/user.schema";
import { Model } from "mongoose";
import { CreateUserDto, UpdateUserDto, UpdateUserPlanDto } from "./dto/user-dto";
export declare class UsersService {
    private readonly usersModel;
    constructor(usersModel: Model<User>);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    getUserById(id: string): Promise<User>;
    getUserByUid(uid: string): Promise<User | null>;
    deleteUserById(id: string): Promise<User>;
    updateUserById(id: string, updateUserDto: UpdateUserDto): Promise<User>;
    updateUserPlan(id: string, updateUserPlan: UpdateUserPlanDto): Promise<User>;
}
