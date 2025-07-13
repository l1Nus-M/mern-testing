const bugController = require('../../src/controllers/bugController');
const Bug = require('../../src/models/Bug');

jest.mock('../../src/models/Bug');

describe('Bug Controller', () => {
  it('should create a bug', async () => {
    const req = { body: { title: 'Test Bug' } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();

    Bug.create.mockResolvedValue({ title: 'Test Bug' });

    await bugController.createBug(req, res, next);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ title: 'Test Bug' });
  });
});