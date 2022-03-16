import { connection } from '../db/mysql.js';
import { createToken } from '../middleware/token.middleware.js';
import bcrypt from 'bcryptjs';

const saltRounds = 10;

const register = (req, res) => {
  const { email, name, password } = req.body;
  const passwordHash = bcrypt.hashSync(password, saltRounds);
  connection.query(
    `insert into users (email,name, password) values ("${email}","${name}","${passwordHash}");`,
    (err, rows) => {
      if (err) {
        res.status(500).send({ error: 'User already exists' });
      } else res.send({ email });
    }
  );
};
const login = (req, res) => {
  const { email, password } = req.body;
  connection.query(
    `select * from users where email = "${email}"`,
    (err, rows) => {
      if (err) {
        res.status(500).send(err);
      } else if (rows.length == 0) {
        res.status(404).send({ error: 'User/password does not exist' });
      } else {
        const user = rows[0];
        const verified = bcrypt.compareSync(password, user.password);
        if (verified) {
          const token = createToken(user);
          res.send({
            name: user.name,
            token,
          });
        } else {
          res.status(404).send({ error: 'User/password does not exist' });
        }
      }
    }
  );
};
const update = (req, res) => {
  const { name, image } = req.body;
  const email = req.user.email;
  connection.query(
    `UPDATE users
      SET name="${name}", img="${image}"
      WHERE email = "${email}";`,
    (err, rows) => {
      if (err) {
        res.status(500).send(err);
      } else res.status(200).send('update');
    }
  );
};
const get = (req, res) => {
  const email = req.user.email;
  connection.query(
    `SELECT * FROM users
     WHERE email = "${email}";`,
    (err, rows) => {
      if (err) {
        res.status(500).send({ err });
      } else {
        const user = {
          name: rows[0].name,
          image: rows[0].img,
        };
        res.status(200).send({ user });
      }
    }
  );
};
const search = (req, res) => {
  const name = req.params.name;
  connection.query(
    `SELECT * FROM users
    WHERE name LIKE "%${name}%";`,
    (err, rows) => {
      if (err) {
        res.status(500).send(err);
      } else {
        let users = [];
        rows.forEach((row) => {
          let user = {
            name: row.name,
            image: row.img,
          };
          users.push(user);
        });
        res.status(200).send(users);
      }
    }
  );
};

export { register, login, update, get, search };
