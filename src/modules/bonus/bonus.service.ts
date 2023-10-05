import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/sequelize';
import sequelize, { Sequelize, Transaction } from 'sequelize';
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
    @InjectConnection()
    private readonly sequelizeInstance: Sequelize,
  ) {}

  async getAvailableBonusesPerUser(userId: number) {
    const transaction: Transaction = await this.sequelizeInstance.transaction();

    try {
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
        transaction,
      });

      await this.userBonusService.bulkCreate(
        bonuses.map(
          (b) => ({
            bonusId: b.id,
            userId,
            bonusLimit: b.userBonusLimit,
          }),
          { transaction },
        ),
      );

      return bonuses.map((b) => b.id);
    } catch (err) {
      await transaction.rollback();
      throw new Error(err);
    }
  }
}
