export declare class CreateTreinoDto {
    codigo: string;
    carga: string;
    serie: string;
    repeticao: string;
    userId: number;
}
declare const UpdateTreinoDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateTreinoDto>>;
export declare class UpdateTreinoDto extends UpdateTreinoDto_base {
}
export {};
