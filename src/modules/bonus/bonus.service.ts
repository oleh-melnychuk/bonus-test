import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Bonus } from '../../database/entities/bonus.entity';
import { UserBonus } from '../../database/entities/user-bonus.entity';

@Injectable()
export class BonusService {
  constructor(
    @InjectModel(Bonus)
    private bonusService: typeof Bonus,
  ) {}

  async getAvailableBonusesPerUser(userId: string) {
    const res = await this.bonusService.findAll({
      where: {
        isActive: true,
        'userBonus.id': null,
      },
      include: [{ model: UserBonus, where: { userId } }],
    });

    console.log(res);

    return [];
  }
}
