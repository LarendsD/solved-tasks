import solution from '../index.js';

test('test', () => {
  expect(solution([12, 1, 2, 3, 0, 11, 4])).toEqual([6, 1, 1, 1, 0, 1, 0]);
  expect(solution([5, 4, 3, 2, 1])).toEqual([4, 3, 2, 1, 0]);
  expect(solution([1, 2, 3, 4, 5])).toEqual([0, 0, 0, 0, 0]);
  expect(solution([7, 6, 10, 5, 2, 8, 1, 9, 3, 4])).toEqual([6, 5, 7, 4, 1, 3, 0, 2, 0, 0]);
});
