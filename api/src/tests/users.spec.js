import app, { server } from '../app.js';
import supertest from 'supertest';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import { connection } from '../db/mysql.js';
import { key } from '../middleware/jwt.js';

dotenv.config();

/* beforeAll(() => {
  console.log('BEFORE ALL TEST');
});
 */
beforeEach(async () => {
  server.close();
  await connection.query('SET FOREIGN_KEY_CHECKS = 0');
  await connection.query('TRUNCATE TABLE users');
  await connection.query('SET FOREIGN_KEY_CHECKS = 1');
});

afterAll(async () => {
  server.close();
  await connection.query('SET FOREIGN_KEY_CHECKS = 0');
  await connection.query('TRUNCATE TABLE users');
  await connection.query('SET FOREIGN_KEY_CHECKS = 1');
});

const userMock = {
  email: 'test@test.com',
  name: 'test',
  password: '1234',
};

describe('Tests API REST users', () => {
  test('register -- ok', async () => {
    await supertest(app)
      .post('/api/users/register')
      .send(userMock)
      .expect(200)
      .then((response) => {
        const user = response.body;
        expect(user.email).toBe(userMock.email);
      });
  });

  test('register -- no-auth', async () => {
    const query = `insert into users (email,name, password) values ("${userMock.email}","${userMock.name}","${userMock.password}");`;
    await connection.query(query);
    await supertest(app)
      .post('/api/users/register')
      .send(userMock)
      .expect(500)
      .then((response) => {
        expect(500).toBe(500);
      });
  });

  test('login -- ok', async () => {
    const saltRounds = 10;
    const passwordHash = bcrypt.hashSync(userMock.password, saltRounds);
    const query = `insert into users (email,name, password) values ("${userMock.email}","${userMock.name}","${passwordHash}");`;
    await connection.query(query);
    await supertest(app)
      .post('/api/users')
      .send(userMock)
      .expect(200)
      .then((response) => {
        const user = response.body;
        expect(user.name).toBe(userMock.name);
        const token = user.token;
        jwt.verify(token, key, (err, decoded) => {
          if (err) {
            throw err;
          } else {
            expect(decoded.name).toBe(userMock.name);
            expect(decoded.email).toBe(userMock.email);
          }
        });
      });
  });
  test('login -- no-user', async () => {
    await supertest(app)
      .post('/api/users')
      .send(userMock)
      .expect(404)
      .then((response) => {
        const user = response.body;
        expect(404).toBe(404);
      });
  });
});
