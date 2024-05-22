export declare class CreateDocumentoDto {
    anoPublicacao: number;
    titulo: string;
    discente: string;
    orientador: string;
    resumo: string;
}
declare const UpdateDocumentoDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateDocumentoDto>>;
export declare class UpdateDocumentoDto extends UpdateDocumentoDto_base {
}
export {};
