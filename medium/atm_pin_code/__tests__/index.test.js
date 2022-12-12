import solution from '../index.js';

test('test', () => {
  expect(solution('1234')).toBeTruthy();
  expect(solution('123456')).toBeTruthy();
  expect(solution('12345')).toBeFalsy();
  expect(solution('some pin code')).toBeFalsy();
  expect(solution('m8te')).toBeFalsy();
});
