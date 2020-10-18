const mysql = require('mysql');

const sqlParams = {
  connectionLimit: 1,
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "praveendb",
};
let connection = mysql.createPool(sqlParams);

module.exports=connection;