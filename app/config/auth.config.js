
//require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
module.exports = {
    ACCESS_TOKEN_SECRET : process.env.ACCESS_TOKEN_SECRET || 'secretkey',
  
}