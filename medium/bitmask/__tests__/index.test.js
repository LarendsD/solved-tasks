import solution from '../index.js';

test('test', () => {
  expect(solution('101101', '101101')).toEqual('101101');
  expect(solution('1011', '0111')).toEqual('0011');
  expect(solution('101', '110')).toEqual('100');
  expect(solution('0111011001', '0001110110')).toEqual('0001010000');
  expect(solution('0100111001', '1110010000')).toEqual('0100010000');
  expect(solution('1110010000', '1001001000')).toEqual('1000000000');
});
