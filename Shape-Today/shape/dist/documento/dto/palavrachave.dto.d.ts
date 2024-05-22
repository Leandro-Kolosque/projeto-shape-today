export declare class CreatePalavraChaveDto {
    palavra: string;
    descritorId: number;
    documentoId: number;
}
declare const UpdatePalavraChaveDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreatePalavraChaveDto>>;
export declare class UpdatePalavraChaveDto extends UpdatePalavraChaveDto_base {
}
export {};
