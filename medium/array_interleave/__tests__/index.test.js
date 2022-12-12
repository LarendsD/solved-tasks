import solution from '../index.js';

test('test', () => {
  expect(solution([5, 1, 3], [4, 9])).toEqual([5, 4, 1, 9]);
  expect(solution([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  expect(solution([1, 3, 5], [2, 4])).toEqual([1, 2, 3, 4]);
  expect(solution([4, 8, 8, 7, 1], [5, 4, 7, 6])).toEqual([4, 5, 8, 4, 8, 7, 7, 6]);
  expect(solution([8, 10, 9, 8, 7], [2, 4, 7, 6, 10])).toEqual([8, 2, 10, 4, 9, 7, 8, 6, 7, 10]);
  expect(solution([1, 8, 8], [3, 4, 7, 10, 3])).toEqual([1, 3, 8, 4, 8, 7]);
});
