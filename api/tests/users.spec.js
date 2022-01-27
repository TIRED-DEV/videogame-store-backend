import app, { server } from '../src/app.js';
import supertest from 'supertest';

beforeAll(() => {
  console.log('BEFORE ALL TEST');
});

beforeEach(() => {
  console.log('BEFORE EACH test');
  server.close();
});

afterAll(() => {
  console.log('AFTER ALL test');
});

// !TODO - end test
describe('Tests API REST users', () => {
  test('get cart', async () => {
    await supertest(app)
      .get('/api/users/cart')
      .expect(200)
      .then((response) => {
        console.log('hola');
      });
  });
});
