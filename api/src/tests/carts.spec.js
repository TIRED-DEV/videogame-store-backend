import app, { server } from '../app.js';
import supertest from 'supertest';
import dotenv from 'dotenv';
import { connection } from '../db/mysql.js';
import { createToken } from '../middleware/token.middleware.js';

dotenv.config();

/* beforeAll(() => {
  console.log('BEFORE ALL TEST');
}); */

beforeEach(async () => {
  server.close();
  await connection.query('SET FOREIGN_KEY_CHECKS = 0');
  await connection.query('TRUNCATE TABLE users');
  await connection.query('TRUNCATE TABLE cart');
  await connection.query('SET FOREIGN_KEY_CHECKS = 1');
});

afterAll(async () => {
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

describe('Tests API REST cart', () => {
  test('create cart -- ok', async () => {
    const query = `INSERT INTO users (email, name, password) VALUES ('${userMock.email}', '${userMock.name}', '${userMock.password}')`;
    await connection.query(query);
    const token = createToken(userMock);
    await supertest(app)
      .post('/api/cart')
      .auth(token, { type: 'bearer' })
      .expect(200)
      .then((response) => {
        expect(response.text).toBe('Cart created');
      });
  });

  test('create cart -- already-exists', async () => {
    const queryUser = `INSERT INTO users (email, name, password) VALUES ('${userMock.email}', '${userMock.name}', '${userMock.password}')`;
    const queryCart = `INSERT INTO cart (user, sold) VALUES ('${userMock.email}', 0)`;
    await connection.query(queryUser);
    await connection.query(queryCart);
    const token = createToken(userMock);
    await supertest(app)
      .post('/api/cart')
      .auth(token, { type: 'bearer' })
      .expect(401)
      .then((response) => {
        expect(response.text).toBe('Cart already exists');
      });
  });

  test('get cart -- ok', async () => {
    const queryUser = `INSERT INTO users (email, name, password) VALUES ('${userMock.email}', '${userMock.name}', '${userMock.password}')`;
    const queryCart = `INSERT INTO cart (user, sold) VALUES ('${userMock.email}', 0)`;
    await connection.query(queryUser);
    await connection.query(queryCart);
    const token = createToken(userMock);
    await supertest(app)
      .get('/api/cart')
      .auth(token, { type: 'bearer' })
      .expect(200)
      .then((response) => {
        expect(response.text).toBe('empty cart!');
      });
  });

  test('get cart -- not-have', async () => {
    const queryUser = `INSERT INTO users (email, name, password) VALUES ('${userMock.email}', '${userMock.name}', '${userMock.password}')`;
    await connection.query(queryUser);
    const token = createToken(userMock);
    await supertest(app)
      .get('/api/cart')
      .auth(token, { type: 'bearer' })
      .expect(200)
      .then((response) => {
        expect(response.text).toBe(`${userMock.email} doesn't have a cart`);
      });
  });
});
