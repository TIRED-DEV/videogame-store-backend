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
        res.status(500).send(err);
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
        res.status(404).send(`User/password does not exist`);
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
          res.status(404).send(`User/password does not exist`);
        }
      }
    }
  );
};

export { register, login };
