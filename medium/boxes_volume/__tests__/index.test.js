import solution from '../index.js';

test('test', () => {
  expect(solution([[2, 3, 2], [6, 6, 7], [1, 2, 1]])).toEqual(266);
  expect(solution([[2, 2, 2], [2, 1, 1]])).toEqual(10);
  expect(solution([[2, 2, 2]])).toEqual(8);
});
