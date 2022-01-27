import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;

const connection = mysql.createConnection({
  host,
  port,
  user,
  password,
  database,
});

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
