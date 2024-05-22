import { Repository } from "typeorm";
import { Projeto } from "../entity/projeto.entity";
import { CreateProjetoDto, UpdateProjetoDto } from "../dto/projeto.dto";
export declare class ProjetoService {
    private projetoRepository;
    constructor(projetoRepository: Repository<Projeto>);
    create(createProjetoDto: CreateProjetoDto): Promise<Projeto>;
    update(id: number, updateProjetoDto: UpdateProjetoDto): Promise<Projeto>;
    remove(id: number): Promise<void>;
    findAll(): Promise<Projeto[]>;
    findOne(id: number): Promise<Projeto>;
}
