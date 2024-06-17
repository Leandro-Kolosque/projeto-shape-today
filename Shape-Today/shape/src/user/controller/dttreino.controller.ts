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
  import { DttreinoService } from "../service/dttreino.service";
  import { CreateDttreinoDto, UpdateDttreinoDto } from "../dto/dttreino.dto";
  
  @Controller("dttreino")
  export class DttreinoController {
    constructor(private readonly dttreinoService: DttreinoService) {}
  
    @Post()
    async create(@Body() createDttreinoDto: CreateDttreinoDto) {
      return await this.dttreinoService.create(createDttreinoDto);
    }
  
    @Get()
    async findAll() {
      return await this.dttreinoService.findAll();
    }
  
    @Get(":id")
    async findOne(@Param("id") id: number) {
      return await this.dttreinoService.findOne(id);
    }
  
    @Put(":id")
    async update(
      @Param("id") id: number,
      @Body() updateDttreinoDto: UpdateDttreinoDto
    ) {
      return await this.dttreinoService.update(id, updateDttreinoDto);
    }
  
    @Delete(":id")
    @HttpCode(HttpStatus.NO_CONTENT)
    async remove(@Param("id") id: number) {
      return await this.dttreinoService.remove(id);
    }
  }
