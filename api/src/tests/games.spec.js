import app, { server } from '../app.js';
import supertest from 'supertest';
import dotenv from 'dotenv';
dotenv.config();

beforeAll(() => {
  console.log('BEFORE ALL TEST');
});

beforeEach(() => {
  console.log('BEFORE EACH test');
  console.log(process.env.DB_DATABASE);
  server.close();
});

afterAll(() => {
  console.log('AFTER ALL test');
  server.close();
});

describe('Tests API REST games', () => {
  test('get all', async () => {
    await supertest(app)
      .get('/api/games')
      .expect(200)
      .then((response) => {
        const games = response.body;
        expect(games.length).toBe(0);
      });
  });
});
