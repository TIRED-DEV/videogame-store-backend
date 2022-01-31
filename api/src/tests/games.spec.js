import app, { server } from '../app.js';
import supertest from 'supertest';
import dotenv from 'dotenv';
import { connection } from '../db/mysql.js';

dotenv.config();

beforeAll(() => {
  console.log('BEFORE ALL TEST');
});

beforeEach(async () => {
  console.log('BEFORE EACH test');
  server.close();
  await connection.query('Delete from games');
});

afterAll(async () => {
  console.log('AFTER ALL test');
  server.close();
  await connection.query('SET FOREIGN_KEY_CHECKS = 0');
  await connection.query('TRUNCATE TABLE games');
  await connection.query('SET FOREIGN_KEY_CHECKS = 1');
});

describe('Tests API REST games', () => {
  const query = `INSERT INTO games (title) VALUES ('test')`;
  test('get all', async () => {
    await connection.query(query);
    await supertest(app)
      .get('/api/games')
      .expect(200)
      .then((response) => {
        const games = response.body;
        expect(games.length).toBe(1);
      });
  });
});
