import solution from '../index.js';

test('test', () => {
  expect(solution([1, 2, 3], 1, 10)).toEqual(2);
  expect(solution([1, 2, 3], 5, 10)).toEqual(10);
  expect(solution([1, 2, 3], -1, 10)).toEqual(10);
  expect(solution([1, 2, 3], -5, 10)).toEqual(10);
  expect(solution([1, -5, 4, 2], 0, 0)).toEqual(1);
  expect(solution([8, 0, 6, 7], -3, -8)).toEqual(-8);
});
