import solution from '../index.js';

test('test', () => {
  expect(solution(6161, 3)).toBeFalsy();
  expect(solution(1010, 2)).toBeTruthy();
  expect(solution(2341, 4)).toBeFalsy();
  expect(solution(5511, 8)).toBeTruthy();
  expect(solution(6076, 1)).toBeFalsy();
  expect(solution(100, 2)).toBeTruthy();
});
