const mysql = require('mysql2');
//const mysql = require('mysql2/promise');
const dbConfig = require('../config/db.config');

//const logger =  require('../utils/logger');


const getDatabaseConnection = async () => {
  try {   //console.log('Connection to MySQL database is successful');
    return connection;
  } catch (err) {
    console.log('Error Connecting to MySQL database ', JSON.stringify(err));
    throw err;
  }
}
      // create a connection to the database
    //const connection = mysql.createConnection({
      const connection = mysql.createPool({
      
      host: dbConfig.HOST,
      user: dbConfig.USER,
      password: dbConfig.PASSWORD,
      database: dbConfig.DB,
      port:dbConfig.PORT
      //multipleStatements: true
    });
 

module.exports = connection;