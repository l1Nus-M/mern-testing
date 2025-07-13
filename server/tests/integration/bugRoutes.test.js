const request = require('supertest');
const express = require('express');
const bugRoutes = require('../../src/routes/bugRoutes');
const errorHandler = require('../../src/middleware/errorHandler');

const app = express();
app.use(express.json());
app.use('/api/bugs', bugRoutes);
app.use(errorHandler);

describe('Bug API', () => {
  it('should return 200 on GET /api/bugs', async () => {
    const res = await request(app).get('/api/bugs');
    expect(res.statusCode).toBe(200);
  });
});