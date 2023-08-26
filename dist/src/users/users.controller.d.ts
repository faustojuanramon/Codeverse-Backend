import { User } from "./schema/user.schema";
import { UsersService } from "./users.service";
import { CreateUserDto, UpdateUserDto, UpdateUserPlanDto } from "./dto/user-dto";
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    getUser(id: string): Promise<User>;
    getUserByUid(uid: string): Promise<User | null>;
    updateUser(id: string, updateUser: UpdateUserDto): Promise<User>;
    updateUserPlan(id: string, updateUserPlan: UpdateUserPlanDto): Promise<User>;
    deleteUser(id: string): Promise<User>;
}
