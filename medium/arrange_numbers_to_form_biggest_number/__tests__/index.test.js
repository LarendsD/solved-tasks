import solution from '../index.js';

test('test', () => {
  expect(solution([1, 34, 3, 98, 9, 76, 45, 4])).toEqual('998764543431');
  expect(solution([1, 2, 3, 4, 5, 6])).toEqual('654321');
  expect(solution([481, 428, 385, 202, 2, 197, 106, 10])).toEqual('481428385220219710610');
  expect(solution([54, 546, 548, 60])).toEqual('6054854654');
  expect(solution([43, 44, 12, 324, 90, 9, 88, 89])).toEqual('9908988444332412');
  expect(solution([1])).toEqual('1');
  expect(solution([1, 1])).toEqual('11');
  expect(solution([1, 2, 223])).toEqual('22321');
});
