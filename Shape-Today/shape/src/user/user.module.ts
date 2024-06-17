import { Module } from '@nestjs/common';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { DatabaseModule } from '../database/database.module';
import { User } from '../user/entity/user.entity';
import { Filiacao } from '../user/entity/filiacao.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { FiliacaoService } from './service/filiacao.service';
import { FiliacaoController } from './controller/filiacao.controller';
import { TreinoService } from './service/treino.service';
import { TreinoController } from './controller/treino.controller';
import { Treino } from './entity/treino.entity';
import { DttreinoService } from './service/dttreino.service';
import { DttreinoController } from './controller/dttreino.controller';
import { Dttreino } from './entity/dttreino.entity';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([User, Filiacao, Treino, Dttreino]),
  ],
  controllers: [AppController, UserController, FiliacaoController, TreinoController, DttreinoController],
  providers: [AppService, UserService, FiliacaoService, TreinoService, DttreinoService],
})
export class UserModule {}
