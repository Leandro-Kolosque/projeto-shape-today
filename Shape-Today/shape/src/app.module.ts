import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { User } from './user/entity/user.entity';
import { Filiacao } from './user/entity/filiacao.entity';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { Treino } from './user/entity/treino.entity';
import { Dttreino } from './user/entity/dttreino.entity';


@Module({
  imports: [
    DatabaseModule,
    UserModule,
    TypeOrmModule.forFeature([User, Filiacao, Treino, Dttreino]),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
