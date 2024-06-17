import { IsString, Length, IsInt, IsDate } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateDttreinoDto {
  @IsDate()
  @Length(10, 10, { message: 'a data deve ser no formato xx/xx/xxxx' })
  data_inicio: Date;

  @IsDate()
  @Length(10, 10, { message: 'a data deve ser no formato xx/xx/xxxx' })
  data_fim: Date;

  @IsInt()
  userId: number;
}

export class UpdateDttreinoDto extends PartialType(CreateDttreinoDto) {}
