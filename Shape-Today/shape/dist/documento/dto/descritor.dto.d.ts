export declare class CreateDescritorDto {
    titulo: string;
    resumo: string;
}
declare const UpdateDescritorDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateDescritorDto>>;
export declare class UpdateDescritorDto extends UpdateDescritorDto_base {
}
export {};
