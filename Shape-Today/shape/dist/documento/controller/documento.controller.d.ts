import { DocumentoService } from "../service/documento.service";
import { CreateDocumentoDto } from "../dto/documento.dto";
import { UpdateDocumentoDto } from "../dto/documento.dto";
export declare class DocumentoController {
    private readonly documentoService;
    constructor(documentoService: DocumentoService);
    create(createDocumentoDto: CreateDocumentoDto, userId: number, projetoId: number): Promise<import("../entity/documento.entity").Documento>;
    findAll(): Promise<import("../entity/documento.entity").Documento[]>;
    findOne(id: number): Promise<import("../entity/documento.entity").Documento>;
    update(id: number, updateDocumentoDto: UpdateDocumentoDto): Promise<import("../entity/documento.entity").Documento>;
    remove(id: number): Promise<any>;
}
