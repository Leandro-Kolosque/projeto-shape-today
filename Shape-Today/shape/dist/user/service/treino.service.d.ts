import { User } from "./../entity/user.entity";
import { Repository } from "typeorm";
import { UserService } from "./user.service";
import { Treino } from "../entity/treino.entity";
import { CreateTreinoDto, UpdateTreinoDto } from "../dto/treino.dto";
export declare class TreinoService {
    private treinoRepository;
    private userService;
    constructor(treinoRepository: Repository<Treino>, userService: UserService);
    create(createTreinoDto: CreateTreinoDto): Promise<Treino>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<Treino>;
    update(id: number, updateTreinoDto: UpdateTreinoDto): Promise<Treino>;
    remove(id: number): Promise<void>;
}
