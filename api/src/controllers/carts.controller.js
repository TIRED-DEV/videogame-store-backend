import { connection } from '../db/mysql.js';

const get = (req, res) => {
  //!TODO: quitar cuando se pase el token
  req.email = 'user1@test.com';
  const email = req.email;
  const query = `SELECT * FROM cart WHERE cart.user = '${email}' AND sold = 0 LIMIT 1`;
  connection.query(query, (err, rows) => {
    console.log(err);
    err ? res.status(500).send(err) : res.status(200).send(rows);
  });
};

const create = (req, res) => {
  //!TODO: quitar cuando se pase el token
  req.email = 'user1@test.com';
  const email = req.email;
  const query = `INSERT INTO cart (user, sold) VALUES ('${email}', 0)`;
  connection.query(query, (err, rows) => {
    err ? res.status(500).send(err) : res.status(200).send('Cart created');
  });
};

const addGame = (req, res) => {
  const id = req.params.id;
  req.email = 'user1@test.com';
  const email = req.email;
  const query = `INSERT INTO cartGame (game, user)`;
};

const update = (req, res) => {};

export { get, create, addGame, update };
