import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { User } from './user/entity/user.entity';
import { Filiacao } from './user/entity/filiacao.entity';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { TreinoModule } from './treino/treino.module';
import { DttreinoModule } from './dttreino/dttreino.module';
import { MaquinaModule } from './maquina/maquina.module';


@Module({
  imports: [
    DatabaseModule,
    UserModule,
    TypeOrmModule.forFeature([User, Filiacao]),
    AuthModule,
    TreinoModule,
    DttreinoModule,
    MaquinaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
