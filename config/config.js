// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const dbConenction = {
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  charset: 'utf8mb4',
  dialect: 'postgres',
  dialectOptions: {
    ssl: true,
  },
};

module.exports = {
  development: dbConenction,
};
