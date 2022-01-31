import { connection } from '../db/mysql.js';

const get = (req, res) => {
  //!TODO: quitar cuando se pase el token @gabysanchez
  req.email = 'user1@test.com';
  const email = req.email;
  const query = `SELECT * FROM cart WHERE cart.user = '${email}' AND sold = 1`;
  connection.query(query, (err, rows) => {
    err ? res.status(500).send(err) : res.status(200).send(rows);
  });
};

export { get };
