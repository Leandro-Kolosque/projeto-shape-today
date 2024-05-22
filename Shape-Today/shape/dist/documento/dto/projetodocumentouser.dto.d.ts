export declare class CreateProjetoDocumentoUserDto {
    userId: number;
    projetoId: number;
    documentoId: number;
    proprietario: boolean;
}
declare const UpdateProjetoDocumentoUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateProjetoDocumentoUserDto>>;
export declare class UpdateProjetoDocumentoUserDto extends UpdateProjetoDocumentoUserDto_base {
}
export {};
