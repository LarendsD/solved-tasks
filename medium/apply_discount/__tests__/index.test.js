import solution from '../index.js';

test('test', () => {
  expect(solution([10, 15], [10, 10])).toEqual(5);
  expect(solution([2, 4, 6, 10], [1, 5, 7, 9])).toEqual(2);
  expect(solution([10, 20, 40, 100], [9, 18, 40, 200])).toEqual(3);
  expect(solution([10, 20, 40, 100], [1, 2, 30, 50])).toEqual(87);
});
