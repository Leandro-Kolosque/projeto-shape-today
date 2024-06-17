import { User } from "./../entity/user.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserService } from "./user.service";
import { Dttreino } from "../entity/dttreino.entity";
import { CreateDttreinoDto, UpdateDttreinoDto } from "../dto/dttreino.dto";

@Injectable()
export class DttreinoService {
  constructor(
    @InjectRepository(Dttreino)
    private dttreinoRepository: Repository<Dttreino>,
    private userService: UserService
  ) {}

  async create(createDttreinoDto: CreateDttreinoDto): Promise<Dttreino> {
    const user = await this.userService.findOne(createDttreinoDto.userId);
    if (!user) {
      throw new NotFoundException(`Usuário não encontrado.`);
    }
    const newDttreino = this.dttreinoRepository.create({
      ...createDttreinoDto,
      user: user, // Associando o usuário encontrado ao novo registro de filiação
    });
    return await this.dttreinoRepository.save(newDttreino);
  }

  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  async findOne(id: number): Promise<Dttreino> {
    const dttreino = await this.dttreinoRepository.findOne({
      where: { id_perfil: id },
      relations: ["user"],
    });
    if (!dttreino) {
      throw new NotFoundException(`Data inválida não encontrada.`);
    }
    return dttreino;
  }

  async update(
    id: number,
    updateDttreinoDto: UpdateDttreinoDto
  ): Promise<Dttreino> {
    const dttreino = await this.findOne(id);
    delete updateDttreinoDto.userId;

    const updated = this.dttreinoRepository.merge(dttreino, updateDttreinoDto);
    return await this.dttreinoRepository.save(updated);
  }

  async remove(id: number): Promise<void> {
    const dttreino = await this.findOne(id);
    await this.dttreinoRepository.remove(dttreino);
  }
}
