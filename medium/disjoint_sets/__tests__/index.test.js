import solution from '../index.js';

test('test', () => {
  expect(solution([12, 34, 11, 9, 3], [7, 2, 1, 5])).toBeTruthy();
  expect(solution([12, 34, 11, 9, 3], [2, 1, 3, 5])).toBeFalsy();
  expect(solution([15, 16, 7, 2, 1], [14, 20, 8, 6, 0])).toBeTruthy();
  expect(solution([1, 2, 4, 5, 8, 9], [2, 1, 3, 5, 9])).toBeFalsy();
});
