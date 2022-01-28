import mysql from 'mysql';
import dotenv from 'dotenv';
dotenv.config();

let host = process.env.DB_HOST;
let port = process.env.DB_PORT;
let user = process.env.DB_USER;
let password = process.env.DB_PASSWORD;

let connection = '';
const connectionData = {
  host,
  port,
  user,
  password,
};
if (process.env.NODE_ENV !== 'test') {
  connectionData.database = process.env.DB_DATABASE;
} else {
  connectionData.database = process.env.DB_DATABASE_TEST;
}
connection = mysql.createConnection(connectionData);
console.log(connection);

export { connection };
