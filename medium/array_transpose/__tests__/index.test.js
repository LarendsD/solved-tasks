import solution from '../index.js';

test('test', () => {
  expect(solution([[1, 2, 3], [10, 20, 30]])).toEqual([[1, 10], [2, 20], [3, 30]]);
  expect(solution([[1, 2], [3, 4], [5, 6]])).toEqual([[1, 3, 5], [2, 4, 6]]);
  expect(solution([[1], [2], [3]])).toEqual([[1, 2, 3]]);
  expect(solution([[0, -2, 1, 1], [0, 2, 0, -1], [0, -2, 2, -1]]))
    .toEqual([[0, 0, 0], [-2, 2, -2], [1, 0, 2], [1, -1, -1]]);
  expect(solution([[-4, 2, -3, -4], [2, 1, 3, -1], [-3, 3, 1, -1]]))
    .toEqual([[-4, 2, -3], [2, 1, 3], [-3, 3, 1], [-4, -1, -1]]);
  expect(solution([[6, 3, 7, -5], [-7, 6, 7, -2], [3, 0, -7, 1]]))
    .toEqual([[6, -7, 3], [3, 6, 0], [7, 7, -7], [-5, -2, 1]]);
});
