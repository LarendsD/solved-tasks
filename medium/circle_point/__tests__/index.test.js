import solution from '../index.js';

test('test', () => {
  expect(solution(10, 3, 5)).toEqual(false);
  expect(solution(-50, 0, 100)).toEqual(true);
  expect(solution(-1, 2, 5)).toEqual(true);
  expect(solution(-50, 50, 100)).toEqual(true);
  expect(solution(-1, 3, 1)).toEqual(false);
});
