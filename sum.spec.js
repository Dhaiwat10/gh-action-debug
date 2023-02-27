const { sum } = require('./index');

/*
 * @group sum
 */
test('sum', () => {
  expect(sum(1, 2)).toBe(3);
});
