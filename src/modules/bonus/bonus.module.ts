import { Module } from '@nestjs/common';
import { BonusController } from './bonus.controller';
import { BonusService } from './bonus.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Bonus } from '../../database/entities/bonus.entity';
import { UserBonus } from '../../database/entities/user-bonus.entity';

@Module({
  imports: [SequelizeModule.forFeature([UserBonus, Bonus])],
  controllers: [BonusController],
  providers: [BonusService],
  exports: [BonusService, SequelizeModule],
})
export class BonusModule {}
