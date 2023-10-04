// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Bonus } from './entities/bonus.entity';
import { UserBonus } from './entities/user-bonus.entity';

export const dataBaseConfig: SequelizeModuleOptions = {
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  dialect: 'postgres',
  models: [UserBonus, Bonus],
};
