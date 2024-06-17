import { DttreinoService } from "../service/dttreino.service";
import { CreateDttreinoDto, UpdateDttreinoDto } from "../dto/dttreino.dto";
export declare class DttreinoController {
    private readonly dttreinoService;
    constructor(dttreinoService: DttreinoService);
    create(createDttreinoDto: CreateDttreinoDto): Promise<import("../entity/dttreino.entity").Dttreino>;
    findAll(): Promise<import("../entity/user.entity").User[]>;
    findOne(id: number): Promise<import("../entity/dttreino.entity").Dttreino>;
    update(id: number, updateDttreinoDto: UpdateDttreinoDto): Promise<import("../entity/dttreino.entity").Dttreino>;
    remove(id: number): Promise<void>;
}
