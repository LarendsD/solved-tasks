import solution from '../index.js';

test('test', () => {
  expect(solution('101101', '101101')).toEqual('101101');
  expect(solution('1011', '0111')).toEqual('1111');
  expect(solution('101', '110')).toEqual('111');
  expect(solution('11001001100', '10100000001')).toEqual('11101001101');
  expect(solution('00111111000', '01010110001')).toEqual('01111111001');
  expect(solution('01001010010', '00111111000')).toEqual('01111111010');
});
