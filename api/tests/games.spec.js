import app from '../src/app.js';
import supertest from 'supertest';

beforeAll(() => {
  console.log('BEFORE ALL TEST');
});

beforeEach(() => {
  console.log('BEFORE EACH test');
});

afterAll(() => {
  console.log('AFTER ALL test');
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
