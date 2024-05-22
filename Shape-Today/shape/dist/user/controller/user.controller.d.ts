import { UserService } from "../service/user.service";
import { CreateUserDto, UpdateUserDto } from "../dto/user.dto";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<any>;
    findAll(): Promise<any[]>;
    findOne(id: number): Promise<any>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<any>;
    delete(id: number): Promise<void>;
}
