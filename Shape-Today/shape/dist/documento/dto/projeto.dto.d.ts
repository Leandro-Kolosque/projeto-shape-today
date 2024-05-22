export declare class CreateProjetoDto {
    titulo: string;
    ano_inicial: number;
    ano_final: number;
}
declare const UpdateProjetoDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateProjetoDto>>;
export declare class UpdateProjetoDto extends UpdateProjetoDto_base {
}
export {};
