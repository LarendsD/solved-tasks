import solution from '../index.js';

test('test', () => {
  expect(solution('abcd', 'wxyz')).toEqual('awbxcydz');
  expect(solution('abcd', 'xyz')).toEqual('axbyczd');
  expect(solution('word', 'doubleword')).toEqual('wdoorudbleword');
  expect(solution('aceg', 'bdfh')).toEqual('abcdefgh');
});
