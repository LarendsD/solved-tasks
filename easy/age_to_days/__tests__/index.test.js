import solution from '../index.js';

test('test', () => {
  expect(solution(12)).toEqual(4380);
  expect(solution(0)).toEqual(0);
  expect(solution(23)).toEqual(8395);
  expect(solution(2)).toEqual(730);
  expect(solution(5)).toEqual(1825);
  expect(solution(25)).toEqual(9125);
  expect(solution(76)).toEqual(27740);
});
