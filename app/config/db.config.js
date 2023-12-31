require('dotenv').config({ path: '.env' });
//require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
console.log(`DB_NAME=${process.env.DB_NAME}`);
console.log(`DB_NAME=${process.env.DB_HOST}`);
console.log(`DB_NAME=${process.env.DB_PORT}`);
module.exports = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_NAME,
  PORT:process.env.DB_PORT,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
