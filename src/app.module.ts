import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dataBaseConfig } from './database/database.config';

import { BonusModule } from './modules/bonus/bonus.module';

@Module({
  imports: [SequelizeModule.forRoot(dataBaseConfig), BonusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
