import { User } from "./../entity/user.entity";
import { Repository } from "typeorm";
import { UserService } from "./user.service";
import { Dttreino } from "../entity/dttreino.entity";
import { CreateDttreinoDto, UpdateDttreinoDto } from "../dto/dttreino.dto";
export declare class DttreinoService {
    private dttreinoRepository;
    private userService;
    constructor(dttreinoRepository: Repository<Dttreino>, userService: UserService);
    create(createDttreinoDto: CreateDttreinoDto): Promise<Dttreino>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<Dttreino>;
    update(id: number, updateDttreinoDto: UpdateDttreinoDto): Promise<Dttreino>;
    remove(id: number): Promise<void>;
}
