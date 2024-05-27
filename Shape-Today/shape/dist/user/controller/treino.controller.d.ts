import { TreinoService } from "../service/treino.service";
import { CreateTreinoDto, UpdateTreinoDto } from "../dto/treino.dto";
export declare class TreinoController {
    private readonly treinoService;
    constructor(treinoService: TreinoService);
    create(createTreinoDto: CreateTreinoDto): Promise<import("../entity/treino.entity").Treino>;
    findAll(): Promise<import("../entity/user.entity").User[]>;
    findOne(id: number): Promise<import("../entity/treino.entity").Treino>;
    update(id: number, updateTreinoDto: UpdateTreinoDto): Promise<import("../entity/treino.entity").Treino>;
    remove(id: number): Promise<void>;
}
