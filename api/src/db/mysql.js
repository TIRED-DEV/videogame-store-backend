import mysql from 'mysql';
import dotenv from 'dotenv';
dotenv.config();

let host = process.env.DB_HOST;
let port = process.env.DB_PORT;
let user = process.env.DB_USER;
let password = process.env.DB_PASSWORD;
let database = process.env.DB_DATABASE;
const connection = mysql.createConnection({
  host,
  port,
  user,
  password,
  database,
});

/* const database = process.env.DB_DATABASE; */

/*
connection.connect((err) => {
  if (!err) {
    console.log('error');
  } else {
    console.log('Database Connected');
  }
});
*/
export { connection };
