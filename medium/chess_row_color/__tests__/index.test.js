import solution from '../index.js';

test('test', () => {
  expect(solution('A', 1)).toEqual('black');
  expect(solution('H', 8)).toEqual('black');
  expect(solution('D', 4)).toEqual('black');
  expect(solution('G', 7)).toEqual('black');
  expect(solution('A', 8)).toEqual('white');
  expect(solution('H', 1)).toEqual('white');
  expect(solution('E', 8)).toEqual('white');
  expect(solution('E', 4)).toEqual('white');
});
