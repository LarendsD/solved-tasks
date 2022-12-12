import solution from '../index.js';

test('test', () => {
  expect(solution('111101', 3)).toEqual('101111');
  expect(solution('1011', -2)).toEqual('1110');
  expect(solution('10010', -3)).toEqual('10100');
  expect(solution('10101', 5)).toEqual('10101');
  expect(solution('01101110000011', -6)).toEqual('10000011011011');
  expect(solution('10000010100100', -7)).toEqual('01001001000001');
});
