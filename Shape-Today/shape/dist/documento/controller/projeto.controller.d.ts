import { ProjetoService } from "../service/projeto.service";
import { CreateProjetoDto, UpdateProjetoDto } from "../dto/projeto.dto";
export declare class ProjetoController {
    private readonly projetoService;
    constructor(projetoService: ProjetoService);
    create(createProjetoDto: CreateProjetoDto): Promise<import("../entity/projeto.entity").Projeto>;
    update(id: number, updateProjetoDto: UpdateProjetoDto): Promise<import("../entity/projeto.entity").Projeto>;
    remove(id: number): Promise<any>;
    findAll(): Promise<import("../entity/projeto.entity").Projeto[]>;
    findOne(id: number): Promise<import("../entity/projeto.entity").Projeto>;
}
