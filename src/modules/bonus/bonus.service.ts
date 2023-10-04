import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import sequelize from 'sequelize';
import { Op } from 'sequelize';
import { Bonus } from '../../database/entities/bonus.entity';
import { UserBonus } from '../../database/entities/user-bonus.entity';

@Injectable()
export class BonusService {
  constructor(
    @InjectModel(Bonus)
    private bonusService: typeof Bonus,
    @InjectModel(UserBonus)
    private userBonusService: typeof UserBonus,
  ) {}

  async getAvailableBonusesPerUser(userId: number) {
    const bonuses = await this.bonusService.findAll({
      where: {
        [Op.and]: [
          sequelize.where(sequelize.col('userBonuses.id'), 'IS', null),
          {
            isActive: true,
          },
        ],
      },

      include: [{ model: UserBonus, where: { userId }, required: false }],
    });

    await this.userBonusService.bulkCreate(
      bonuses.map((b) => ({
        bonusId: b.id,
        userId,
        bonusLimit: b.userBonusLimit,
      })),
    );

    return bonuses.map((b) => b.id);
  }
}
