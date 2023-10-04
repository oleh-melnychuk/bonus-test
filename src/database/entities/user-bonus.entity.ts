import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Bonus } from './bonus.entity';

@Table({ underscored: true })
export class UserBonus extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.SMALLINT)
  bonusLimit: number;

  @ForeignKey(() => Bonus)
  @Column({ allowNull: false })
  bonusId: number;

  @BelongsTo(() => Bonus)
  bonus: Bonus;
}
