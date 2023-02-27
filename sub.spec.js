const { sub } = require('./index');

/*
 * @group sub
 */
test('sub', () => {
  expect(sub(1, 2)).toBe(-1);
});
