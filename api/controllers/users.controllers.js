import { connection } from '../src/db/mysql.js';

// obtains the user's cart with sold and unsold games
//!TODO - Cris, termina la query porfa
const getCart = (req, res) => {
  const query = 'SELECT * FROM sales';
  connection.query(query, (err, rows) => {
    err ? res.status(500).send(err) : res.status(200).send(rows);
  });
};

const getOrders = (req, res) => {
  const query = 'SELECT * FROM sales WHERE sold = 1';
  connection.query(query, (err, rows) => {
    err ? res.status(500).send(err) : res.status(200).send(rows);
  });
};

export { getCart, getOrders };
