import solution from '../index.js';

test('test', () => {
  expect(solution(2)).toEqual(12);
  expect(solution(0)).toEqual(0);
  expect(solution(1)).toEqual(3);
  expect(solution(3)).toEqual(30);
});
