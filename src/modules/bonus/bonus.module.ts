import { Module } from '@nestjs/common';
import { BonusController } from './bonus.controller';
import { BonusService } from './bonus.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Bonus } from '../../database/entities/bonus.entity';
import { UserBonus } from '../../database/entities/user-bonus.entity';
import { IBonusService } from './types/bonus.interface';

@Module({
  imports: [SequelizeModule.forFeature([UserBonus, Bonus])],
  controllers: [BonusController],
  providers: [
    {
      provide: IBonusService,
      useClass: BonusService,
    },
  ],
  exports: [SequelizeModule],
})
export class BonusModule {}
