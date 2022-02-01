import app, { server } from '../app.js';
import supertest from 'supertest';
import dotenv from 'dotenv';
import { connection } from '../db/mysql.js';
import { createToken } from '../middleware/token.middleware.js';

dotenv.config();

beforeAll(() => {
  console.log('BEFORE ALL TEST');
});

beforeEach(async () => {
  console.log('BEFORE EACH test');
  server.close();
  await connection.query('SET FOREIGN_KEY_CHECKS = 0');
  await connection.query('TRUNCATE TABLE users');
  await connection.query('TRUNCATE TABLE cart');
  await connection.query('SET FOREIGN_KEY_CHECKS = 1');
});

afterAll(async () => {
  console.log('AFTER ALL test');
  server.close();
  await connection.query('SET FOREIGN_KEY_CHECKS = 0');
  await connection.query('TRUNCATE TABLE users');
  await connection.query('TRUNCATE TABLE cart');
  await connection.query('SET FOREIGN_KEY_CHECKS = 1');
});

const userMock = {
  email: 'test@test.com',
  name: 'test',
  password: '1234',
};

describe('Tests API REST orders', () => {
  test('get orders', async () => {
    const queryUser = `INSERT INTO users (email, name, password) VALUES ('${userMock.email}', '${userMock.name}', '${userMock.password}')`;
    const queryCart = `INSERT INTO cart (user, sold) VALUES ('${userMock.email}', 1)`;
    await connection.query(queryUser);
    await connection.query(queryCart);
    const token = createToken(userMock);
    await supertest(app)
      .get('/api/orders')
      .auth(token, { type: 'bearer' })
      .expect(200)
      .then((response) => {
        const cart = response.body;
        expect(cart.length).toBe(1);
      });
  });
});
