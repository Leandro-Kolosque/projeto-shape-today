export declare class CreateUserDto {
    nome: string;
    email: string;
    senha: string;
    cpf: string;
}
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
}
export {};
