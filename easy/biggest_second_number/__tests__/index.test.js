import solution from '../index.js';

test('test', () => {
  expect(solution([1, 2, 3])).toEqual(2);
  expect(solution([1, -2, 3])).toEqual(1);
  expect(solution([0, 0, 10])).toEqual(0);
  expect(solution([-1, -2, -3])).toEqual(-2);
  expect(solution([-11, -1, 4])).toEqual(-1);
  expect(solution([8, -4, 8])).toEqual(8);
  expect(solution([-9, 1, -9])).toEqual(-9);
});
