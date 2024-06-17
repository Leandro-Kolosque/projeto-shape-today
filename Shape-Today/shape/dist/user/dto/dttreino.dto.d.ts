export declare class CreateDttreinoDto {
    data_inicio: Date;
    data_fim: Date;
    userId: number;
}
declare const UpdateDttreinoDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateDttreinoDto>>;
export declare class UpdateDttreinoDto extends UpdateDttreinoDto_base {
}
export {};
