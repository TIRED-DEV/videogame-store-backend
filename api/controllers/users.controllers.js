import { connection } from '../src/db/mysql.js';

const getCart = (req, res) => {
  //!TODO: quitar cuando se pase el token
  const email = req.email;
  const query = `SELECT * FROM cart WHERE cart.user = '${email}' AND sold = 0 LIMIT 1`;
  connection.query(query, (err, rows) => {
    err ? res.status(500).send(err) : res.status(200).send(rows);
  });
};

const getOrders = (req, res) => {
  //@gabysanchez
  //!TODO: quitar cuando se pase el token @gabysanchez
  req.email = 'user1@test.com';
  const email = req.email;
  const query = `SELECT * FROM cart WHERE cart.user = '${email}' AND sold = 1`;
  connection.query(query, (err, rows) => {
    err ? res.status(500).send(err) : res.status(200).send(rows);
  });
};

export { getCart, getOrders };
