import solution from '../index.js';

test('test', () => {
  expect(solution([50, 60, 60, 45, 70, 85])).toEqual([180, 190]);
  expect(solution([50, 60, 60, 45])).toEqual([110, 105]);
  expect(solution([50, 60])).toEqual([50, 60]);
});
