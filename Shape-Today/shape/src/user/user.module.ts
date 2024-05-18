import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { User } from './entity/user.entity';
import { Filiacao } from './entity/filiacao.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FiliacaoService } from './service/filiacao.service';
import { FiliacaoController } from './controller/filiacao.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User, Filiacao])],
  providers: [UserService, FiliacaoService],
  controllers: [UserController, FiliacaoController]
})
export class UserModule {}