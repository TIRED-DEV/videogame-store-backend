import { connection } from '../db/mysql.js';

const get = (req, res) => {
  const query = 'SELECT * FROM games';
  connection.query(query, (err, rows) => {
    err ? res.status(500).send(err) : res.status(200).json(rows);
  });
};

export { get };
