const request = require('supertest');
const app = require('./app');

describe('GET /api', () => {
  test('should return 200 and correct message', async () => {
    const res = await request(app).get('/api');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Hello World');
  });
});
