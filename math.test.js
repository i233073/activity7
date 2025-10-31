const { add } = require('./math');

describe('add function', () => {
  test('adds two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('throws error on invalid input', () => {
    expect(() => add('2', 3)).toThrow('Invalid input');
  });
});
