import solution from '../index.js';

test('test', () => {
  expect(solution(3, 15)).toEqual(7.5);
  expect(solution(0, 0)).toEqual(0.0);
  expect(solution(0, 15)).toEqual(82.5);
  expect(solution(0, 50)).toEqual(275.0);
  expect(solution(3, 45)).toEqual(157.5);
});
