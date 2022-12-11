import solution from '../index.js';

test('test', () => {
  expect(solution([10, 11, 12])).toEqual(6);
  expect(solution([11, 22, 33, 44])).toEqual(20);
  expect(solution([99, 99, 99, 99, 99, 99])).toEqual(108);
  expect(solution([60, 73, 14, 75, 74, 20, 25, 20, 27, 82])).toEqual(74);
  expect(solution([81, 28, 88, 15, 44, 11, 21, 45])).toEqual(63);
  expect(solution([27, 77, 73, 25, 72, 74, 73])).toEqual(70);
});
