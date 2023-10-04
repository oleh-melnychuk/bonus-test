import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
  HasMany,
} from 'sequelize-typescript';
import { UserBonus } from './user-bonus.entity';

@Table({ underscored: true, tableName: 'bonus' })
export class Bonus extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.SMALLINT)
  bonusLimit: number;

  @Column(DataType.SMALLINT)
  userBonusLimit: number;

  @Column(DataType.BOOLEAN)
  isActive: boolean;

  @HasMany(() => UserBonus)
  userBonuses: UserBonus[];
}
