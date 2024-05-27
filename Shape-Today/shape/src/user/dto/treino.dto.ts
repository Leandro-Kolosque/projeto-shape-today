import { IsInt, IsString, Length } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from "@nestjs/swagger";

export class CreateTreinoDto {
    @ApiProperty({
        description: 'Nome do usuário',
        minimum: 8,
        maximum: 40,
        example: 'João Silva',
    })
    @IsString()
    @Length(1, 2, { message: 'o tamanho do código da máquina deve ser de no máximo 2 caracteres' })
    codigo: string;

    @IsString()
    @Length(1, 4, { message: 'o peso minimo da endereço é de 1kg e o peso máximo é de 9999kg' })
    carga: string;

    @IsString()
    @Length(1, 2, { message: 'o minino de séries é 1 e o máximo de séries é de 99' })
    serie: string;

    @IsString()
    @Length(1, 3, { message: 'o minimo de repetições é 1 e o máximo é 999' })
    repeticao: string;

    @ApiProperty({
        description: 'ID do usuário',
        example: 1,
    })

    @IsInt()
    userId: number;
}



export class UpdateTreinoDto extends PartialType(CreateTreinoDto) { }

