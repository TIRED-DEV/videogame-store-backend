import { connection } from '../db/mysql.js';

const get = (req, res) => {
  const email = req.user.email;
  const query = ` 
  SELECT cg.user AS user, DATE_FORMAT(cg.date, '%Y-%m-%d %H:%i:%s') AS date, ga.title AS title
  from cartGame AS cg
  JOIN games AS ga ON (cg.game=ga.id)
  WHERE cg.user = '${email}' AND
  cg.date IN (
    SELECT ca.date
    FROM cart AS ca
    WHERE ca.user = '${email}' AND ca.sold = true
  )`;
  connection.query(query, (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else {
      let data = [];
      if (rows.length === 0) {
        data = 'no orders!';
      } else {
        rows.forEach((row) => {
          let cart = {
            date: row.date,
            games: [{ title: row.title }],
          };
          let same = data.find((item) => item.date == row.date);
          if (same) {
            same.games.push(cart.games[0]);
          } else {
            data.push(cart);
          }
        });
      }
      res.status(200).send(data);
    }
  });
};

export { get };
