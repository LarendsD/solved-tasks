import solution from '../index.js';

test('test', () => {
  expect(solution(12)).toEqual(3);
  expect(solution(23)).toEqual(5);
  expect(solution(10)).toEqual(1);
  expect(solution(99)).toEqual(18);
});
