import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
} from 'sequelize-typescript';

@Table({ underscored: true })
export class Bonus extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.SMALLINT)
  bonusLimit: number;

  @Column(DataType.SMALLINT)
  userBonusLimit: number;
}
