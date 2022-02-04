import jwt from 'jsonwebtoken';
import { key } from './jwt.js';

const createToken = (user) => {
  const payload = {
    name: user.name,
    email: user.email,
  };
  return jwt.sign(payload, key, { expiresIn: '7d' });
};

const ensureAuth = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];
    if (token) {
      jwt.verify(token, key, (err, decoded) => {
        if (err) {
          return res.status(401).send(err);
        } else {
          req.user = { name: decoded.name, email: decoded.email };

          next();
        }
      });
    } else {
      return res.status(403).send('No auth');
    }
  } else {
    return res.status(501).send('No auth');
  }
};

export { createToken, ensureAuth };
