import { Repository } from "typeorm";
import { Documento } from "../entity/documento.entity";
import { ProjetoDocumentoUser } from "../entity/projeto_documento_user.entity";
import { CreateDocumentoDto, UpdateDocumentoDto } from "../dto/documento.dto";
export declare class DocumentoService {
    private documentoRepository;
    private projetoDocumentoUserRepository;
    constructor(documentoRepository: Repository<Documento>, projetoDocumentoUserRepository: Repository<ProjetoDocumentoUser>);
    create(createDocumentoDto: CreateDocumentoDto, userId: number, projetoId: number): Promise<Documento>;
    findAll(): Promise<Documento[]>;
    findOne(id: number): Promise<Documento>;
    update(id: number, updateDocumentoDto: UpdateDocumentoDto): Promise<Documento>;
    remove(id: number): Promise<void>;
}
