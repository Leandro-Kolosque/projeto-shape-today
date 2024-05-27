import { User } from "./../entity/user.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserService } from "./user.service";
import { Treino } from "../entity/treino.entity";
import { CreateTreinoDto, UpdateTreinoDto } from "../dto/treino.dto";

@Injectable()
export class TreinoService {
  constructor(
    @InjectRepository(Treino)
    private treinoRepository: Repository<Treino>,
    private userService: UserService
  ) {}

  async create(createTreinoDto: CreateTreinoDto): Promise<Treino> {
    const user = await this.userService.findOne(createTreinoDto.userId);
    if (!user) {
      throw new NotFoundException(`Usuário não encontrado.`);
    }
    const newTreino = this.treinoRepository.create({
      ...createTreinoDto,
      user: user,
    });
    return await this.treinoRepository.save(newTreino);
  }

  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  async findOne(id: number): Promise<Treino> {
    const treino = await this.treinoRepository.findOne({
      where: { id_perfil: id },
      relations: ["user"],
    });
    if (!treino) {
      throw new NotFoundException(`Treino inexistente.`);
    }
    return treino;
  }

  async update(
    id: number,
    updateTreinoDto: UpdateTreinoDto
  ): Promise<Treino> {
    const treino = await this.findOne(id);
    delete updateTreinoDto.userId;

    const updated = this.treinoRepository.merge(treino, updateTreinoDto);
    return await this.treinoRepository.save(updated);
  }

  async remove(id: number): Promise<void> {
    const treino = await this.findOne(id);
    await this.treinoRepository.remove(treino);
  }
}
