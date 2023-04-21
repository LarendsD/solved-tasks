import solution from '../index.js';

test('test', () => {
  expect(solution(4271, 1234)).toEqual([1, 2]);
  expect(solution(4271, 5682)).toEqual([0, 1]);
  expect(solution(4271, 4271)).toEqual([4, 0]);
  expect(solution(4182, 4273)).toEqual([1, 1]);
});
