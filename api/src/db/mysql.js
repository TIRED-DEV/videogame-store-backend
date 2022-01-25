import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;

const connection = mysql.createConnection({
  host,
  port,
  user,
  password,
  database,
});

export { connection };
