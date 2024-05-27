import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    HttpCode,
    HttpStatus,
  } from "@nestjs/common";
  import { TreinoService } from "../service/treino.service";
  import { CreateTreinoDto, UpdateTreinoDto } from "../dto/treino.dto";
  
  @Controller("treino")
  export class TreinoController {
    constructor(private readonly treinoService: TreinoService) {}
  
    @Post()
    async create(@Body() createTreinoDto: CreateTreinoDto) {
      return await this.treinoService.create(createTreinoDto);
    }
  
    @Get()
    async findAll() {
      return await this.treinoService.findAll();
    }
  
    @Get(":id")
    async findOne(@Param("id") id: number) {
      return await this.treinoService.findOne(id);
    }
  
    @Put(":id")
    async update(
      @Param("id") id: number,
      @Body() updateTreinoDto: UpdateTreinoDto
    ) {
      return await this.treinoService.update(id, updateTreinoDto);
    }
  
    @Delete(":id")
    @HttpCode(HttpStatus.NO_CONTENT)
    async remove(@Param("id") id: number) {
      return await this.treinoService.remove(id);
    }
  }
