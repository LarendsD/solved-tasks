import solution from '../index.js';

test('test', () => {
  expect(solution([1, 2, 3, 7])).toEqual('Boom!');
  expect(solution([7, 7, 10, 2, 3])).toEqual('Boom!');
  expect(solution([1, 2, 3, 10, 4, 2])).toEqual('There is no 7.');
  expect(solution([8, 3, -4])).toEqual('There is no 7.');
  expect(solution([3, 5, 8, 3, 3, 8, 1, -5, -4, -10])).toEqual('There is no 7.');
});
