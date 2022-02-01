import { query } from 'express';
import { connection } from '../db/mysql.js';

const get = (req, res) => {
  const email = req.user.email;
  const query = ` 
  SELECT cg.user AS user, DATE_FORMAT(cg.date, '%d/%m/%Y') AS date, ga.title AS title
  from cartGame AS cg
  JOIN games AS ga ON (cg.game=ga.id)
  WHERE cg.user = '${email}' AND
  cg.date IN (
    SELECT ca.date
    FROM cart AS ca
    WHERE ca.user = '${email}' AND ca.sold = false
  )`;
  connection.query(query, (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else {
      let data;
      if (rows.length === 0) {
        data = 'empty cart!';
      } else {
        rows.forEach((row) => {
          let cart = {
            date: row.date,
            games: [
              {
                title: row.title,
              },
            ],
          };
          if (data) {
            data.games.push(cart.games[0]);
          } else {
            data = cart;
          }
        });
      }
      res.status(200).send(data);
    }
  });
};

const create = (req, res) => {
  const email = req.user.email;
  const query = `INSERT INTO cart (user, sold) VALUES ('${email}', 0)`;
  connection.query(query, (err, rows) => {
    err ? res.status(500).send(err) : res.status(200).send('Cart created');
  });
};

const addGame = (req, res) => {
  const email = req.user.email;
  const game = req.body.game;
  const queryDate = `SELECT DATE_FORMAT(date, '%Y-%m-%d %H:%i:%s') as date FROM cart WHERE user = '${email}' AND sold = false`;
  connection.query(queryDate, (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (rows.length === 0) {
        res.status(401).send('Cart does not exist, sorry');
      } else {
        const date = rows[0].date;
        const query = `INSERT INTO cartGame (game, user, date) VALUES (${game}, '${email}', '${date}')`;
        connection.query(query, (err, rows) => {
          err
            ? res.status(500).send(err)
            : res.status(200).send('Game added to cart');
        });
      }
    }
  });
};

export { get, create, addGame };
